# Import the dependencies.a
from flask import Flask, jsonify
from flask_pymongo import PyMongo
import pandas as pd

# Create an app, being sure to pass __name__
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/pollution"
mongo = PyMongo(app)

#
@app.route("/")
def home():
    return (
        f"Welcome to the Home Page<br>"
        f"<br>____________________________<br>"
        f"<br>Available Routes:<br>"
        f"<br>"
        f"/Route 1: Co2 sea surface temp relationship Hansle/Shruti"
        f"/Route 2: Air Quality-Didi/Grant"
        f"/Bonus: Christmas route-Hansle"

    )

@app.route("/air-quality")
def air_quality():
    df = pd.read_csv("./Route2/Resources/who_ambient_air_quality.csv")
    columns_selection = ["country_name","pm25_concentration","year"]
    clean_df = df[columns_selection].dropna(subset=["pm25_concentration"])
    gb = clean_df.groupby(["country_name","year"]).mean().reset_index()
    return jsonify (gb.to_dict("records"))

@app.route('/api/data/seatemp', methods=['GET'])
def get_data_seatemp():
    data = list(mongo.db.sea_temp.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data/co2', methods=['GET'])
def get_data_co2():
    data = list(mongo.db.co2_emission.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data/aqi', methods=['GET'])
def get_data_aqi():
    data = list(mongo.db.aqi.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data/seatemp', methods=['GET'])
def get_data_seatemp():
    data = list(mongo.db.sea_temp.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data/co2', methods=['GET'])
def get_data_co2():
    data = list(mongo.db.co2_emission.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data/aqi', methods=['GET'])
def get_data_aqi():
    data = list(mongo.db.aqi.find({}, {'_id': 0}))
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)