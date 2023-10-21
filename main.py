from flask import Flask, render_template

from quotes import *

app = Flask(__name__)

@app.route("/")
def hello():
    name = "Alexandre"
    tiny_list = [1,2,3,4,5,6,7,8,9,10]
    return render_template("base.html", 
                           name=name, 
                           tiny_list=tiny_list
                           )

@app.route("/<number>")
def hello_number(number):
    return f"Hello World {number} times!"

#@app.route("/test")
#def whatever():
#    return "Whatever"

#if __name__ == "__main__":
#    app.run(debug=True)