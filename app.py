# Import the dependencies.a
from flask import Flask, jsonify
from flask_pymongo import PyMongo


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
        f"/Route 1: /api/data/seatemp returns Sea Temperature Data in json format"
        f"<br>"
        f"/Route 2: /api/data/co2 returns CO2 data in json format"
        f"<br>"
        f"/Route 3: /api/data/aqi returns Air Quality data in json format"
        f"<br>"

    )

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