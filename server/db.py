import psycopg2
from psycopg2.errors import SerializationFailure

import logging

conn = psycopg2.connect("postgresql://chantal:datagrind2022@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddata-grind-2982")
def info(conn):
     with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS users_table (username VARCHAR(60), text TEXT, image_object TEXT)"),
        cur.execute(
             "CREATE TABLE IF NOT EXISTS waste_table (country VARCHAR(30), code VARCHAR(30), item VARCHAR(30), value INT )")
       
      
      
        logging.debug("create_accounts(): status message: %s",
                      cur.statusmessage)
     conn.commit() 


def insert_post(conn, username, text, image_object):
     with conn.cursor() as cur:
        cur.execute(
             f"INSERT INTO users_table (username, text, image_object) VALUES ('{username}', '{text}', '{image_object}')")

        
     conn.commit()


info(conn)
