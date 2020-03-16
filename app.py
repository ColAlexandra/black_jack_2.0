from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/')
def index():
    balance = int(request.args.get('balance', 500))
    rate = int(request.args.get('rate', 40))
    return render_template('index.html', rate=rate, balance = balance)


if __name__ == '__main__':
    app.run()