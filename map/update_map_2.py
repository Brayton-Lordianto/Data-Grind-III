import pandas as pd
import folium

d = [
    { 'Country' : 'Australia', 'Code' : 'AUS', 'Item': 'Coca-Cola', 'Value': 2},
    { 'Country' : 'Australia', 'Code' : 'AUS', 'Item': 'Lays', 'Value': 10},
    { 'Country' : 'Australia', 'Code' : 'AUS', 'Item': 'Cigarettes', 'Value': 10}
]

df = pd.DataFrame(d)
df



def add_choropeth_to_map(data, geojson, folium_map):

    cp = folium.Choropleth(
        geo_data=geojson,
        data=data,
        columns=[country_col, main_value],
        nan_fill_color='grey',
        nan_fill_opacity=0,
        key_on=geojson_key_country,
        fill_color='YlOrRd', 
        fill_opacity=0.7, 
        line_opacity=0.2,
        legend_name='Waste in KG/CAP in 2020'
    ).add_to(folium_map)

    # self.cp = cp

    # return self.get_click_popup(data, geojson, folium_map, cp)
    return (folium_map, cp)

import json
def get_geo_json(geo_path=r'countries.geojson'):
    with open(geo_path) as geo_file:
        geo_json = json.load(geo_file)

    return geo_json

geojson = get_geo_json()

country_col = 'Country'
country_code_col = 'Code'
main_value = 'Value'

geojson_key_country = 'feature.properties.ADMIN'
geojson_key_country_code = 'feature.properties.ISO_A3'

def get_max_cols(geojson, cp, data):
    # creating a state indexed version of the dataframe so we can lookup values
    indexed = data.set_index(country_col)
    
    # the list of cols to add
    cols = set()
    
    for s in cp.geojson.data['features']:
        name = (s['properties']['ADMIN'])
        if len(indexed[indexed.index == name]) != 0:
            # all item df is the df for each item for this country
            all_items_df = indexed.loc[s['properties']['ADMIN']]

            # get each tag for each item
            items = list(all_items_df['Item'])
            for item in items:
                cols.add(item)
                
    return cols



from random import randint

def create_randoms_df(cp, items):
    l = []
    
    for s in cp.geojson.data['features']:
        country = s['properties']['ADMIN']
        country_code = s['properties']['ISO_A3']
        
        for item in items:
            l.append(
                { 'Country' : country, 'Code' : country_code, 'Item': item, 'Value': randint(5, 100)},
            )
    
    return pd.DataFrame(l)
        
def get_choropleth_map():
    # create the map with a starting coordinate in usa
    (LATITUDE, LONGITUDE) = (37.127476, -99.277467)
    START = [LATITUDE, LONGITUDE]
    ZOOM = 4
    MAX_ZOOM = 15
    folium_map = folium.folium.Map(location=START, zoom_start=ZOOM, max_zoom=MAX_ZOOM)

    return folium_map


folium_map = get_choropleth_map()
_, cp = add_choropeth_to_map(df, geojson, folium_map)

max_cols = get_max_cols(geojson, cp, df)
df_new = create_randoms_df(cp, max_cols)
df_new



folium_map, cp = add_choropeth_to_map(df_new, geojson, folium_map)
folium_map



def get_click_popup(data, geojson, folium_map, cp):
    # creating a state indexed version of the dataframe so we can lookup values
    indexed = data.set_index(country_col)
    
    # looping thru the geojson object and adding a new property
    # and assigning a value from our dataframe
    for s in cp.geojson.data['features']:
        s['properties']['Country'] = s['properties']['ADMIN']
        s['properties']['Country_Code'] = s['properties']['ISO_A3']
        s['properties']['-'] = ''
        name = (s['properties']['ADMIN'])
        if len(indexed[indexed.index == name]) != 0:
            # all item df is the df for each item for this country
            all_items_df = indexed.loc[s['properties']['ADMIN']]

            # get the total too
            total_for_country = sum(all_items_df['Value'])
            s['properties']['Total Waste'] = total_for_country
            
            # initialize values for each item
            items = list(all_items_df['Item'])
            for item in items:
                value = int(all_items_df[all_items_df['Item'] == item][main_value])
                s['properties'][item] = value
                
        else:
            s['properties']['Total Waste'] = 'No Data Yet'

    # get cols in correct order with country information
    tooltip_fields = ['Country', 'Country_Code', '-'] + list(max_cols)
    
    # and finally adding a tooltip/hover to the choropleth's geojson
    folium.GeoJsonTooltip(tooltip_fields).add_to(cp.geojson)
    folium.LayerControl().add_to(folium_map)

    # # print(folium_map)

    return folium_map
get_click_popup(df_new, geojson, folium_map, cp)
# folium_map``


import os

# being given a name, saves the c map into that template
# use map.html will save to map.html
def save_map(name = "map_of_classified_posts.html", map = None):
    if not map: map = get_choropleth_map()
    map.save(os.path.join('./templates', name))
    
save_map(map=folium_map)