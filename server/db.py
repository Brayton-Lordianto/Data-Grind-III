import psycopg2
from psycopg2.errors import SerializationFailure

import logging

conn = psycopg2.connect("postgresql://chantal:hackrunway2022@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dhackrunway2022-2943")

def info(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS users_table (username VARCHAR(60), text VARCHAR, image_object TEXT"),
        cur.execute(
             "CREATE TABLE IF NOT EXISTS waste_table ( )")
        cur.execute(
             "CREATE TABLE IF NOT EXISTS search_table (img_url VARCHAR(600), name VARCHAR(60), extern_link VARCHAR(600), price INT, product_img_link VARCHAR(600) )")
      
      
      
        logging.debug("create_accounts(): status message: %s",
                      cur.statusmessage)
        conn.commit() 


def insert_post(conn, username, text, image_object):
     with conn.cursor() as cur:
        cur.execute(
             f"INSERT INTO users_table (username, text, image_object) VALUES ('{username}', '{text}', '{image_object}')"),
