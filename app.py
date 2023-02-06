from flask import Flask,render_template ,redirect ,url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/test", methods=['GET','POST'])
def test():
    return redirect(url_for('index'))

@app.route("/discode")
def dic():
    return render_template("dis.html")




if __name__=='__main__':
    app.run()
