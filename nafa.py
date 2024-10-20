#import o flask
from flask import Flask , render_template , request , redirect
import psycopg2

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("login.html")
@app.route('/login', methods=['POST','GET'])
def login():
    try:
        nome = request.form.get('input_username')
        senha = request.form.get('input_senha')
        conexao = psycopg2.connect(database = "flask",
                           host = "localhost",
                           user = "postgres",
                           password = "5115",
                           port = "5432")
        cursor = conexao.cursor()
        query = "SELECT nome,senha FROM usuario WHERE nome = %s AND senha = %s"
        cursor.execute(query, (nome, senha))
        login = cursor.fetchone()
        if login:
            return redirect('/index')
        else:
            return render_template('teste.html')
    except:
        return render_template('teste.html')
    
@app.route('/criar_conta',methods=['POST'])
def criar_conta():
    return render_template('criar_conta.html')
@app.route('/criar_conta1',methods=['GET','POST'])
def cadrasto():
    try:
        conexao = psycopg2.connect(database = "flask",
            host = "localhost",
            user = "postgres",
            password = "5115",
            port = "5432")
        try:
            nome_da_pessoa = request.form.get('input_id_input')
            senha_da_pessoa = request.form.get('input_senha_pessoa_input')
            email_da_pessoa = request.form.get('email_input_da_pessoa')
            cursor = conexao.cursor()
            salvar_dadoss = "INSERT INTO usuario(nome,senha,email) VALUES(%s , %s , %s)"
            cursor.execute(salvar_dadoss, (nome_da_pessoa,senha_da_pessoa,email_da_pessoa))
            conexao.commit()
            conexao.close()
            return redirect('/')
        except:
            conexao.rollback()
            return print('erro ao salvar no banco de dados')
    except ConnectionError:
        print('erro de conexão')

@app.route('/recuperar_conta',methods=['POST','GET'])
def recuperar():
    return render_template('recuperar.html')
@app.route('/recuperar_conta1',methods=['POST','GET'])
def recuperar_conta():
    try:
        conexao = psycopg2.connect(database = "flask",
            host = "localhost",
            user = "postgres",
            password = "5115",
            port = "5432")
        try:
            email_pessoa = request.form.get('receber_input_email')
            nova_senha = request.form.get('input_nova_senha')
            fazer_update = "UPDATE fLask SET senha = %s WHERE email = %s"
            cursor = conexao.cursor()
            cursor.execute(fazer_update,( nova_senha,email_pessoa))
            conexao.commit()
            conexao.close()
            return redirect('/')
        except:
            conexao.rollback()
            return print("os dados não foram mudados")
    except:
        print('erro de conexão')

@app.route('/index', methods=['POST','GET'])
def index():
    return render_template('index.html')

@app.route('/historia-1', methods=['POST','GET'])
def historia():
    return render_template('historia.html')

@app.route('/começo',  methods=['POST','GET'])
def começo():
    return redirect('/index')

@app.route('/x-force',methods=['POST','GET'])
def x_force():
    return render_template('X-force.html')
@app.route('/personagem',methods=['POST','GET'])
def personagem():
    return render_template('personagem.html')

if __name__ == '__main__':
    app.run(debug=True)