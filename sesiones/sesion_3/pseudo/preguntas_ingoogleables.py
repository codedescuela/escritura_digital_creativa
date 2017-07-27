# preguntas_ingoogleables.py
# by lucas martinez
# generative questions
# in spanish
# absurd
# follow a grammar
# grammar: question - verb - adverb - noun?
# july 19 2017
# v 0.0.1


#importar modulos
import random
import json


datos_crudos = open("./jugadores_colo_colo.json").read()

procesado = json.loads(datos_crudos)

jugadores = procesado["jugadores_colo_colo"]

# variables
# questions
pregun = ["quien", "donde", "cual", "cuando", "como"]
# verbs
verbos = ["pichanguear", "comer", "bailar", "saltar", "soslayar"]
# adverbs
adverbios = ["suavemente", "torpemente", "nunca", "correctamente", "poco"]
# nouns
sustantivos = ["un perro", "el mago valdivia", "tres chupacabras","las manzanas", "la micro"]

# functions

# function pregunta()
# prints the question
def preguntar():
    # here goes everything
    pregunta = random.choice(pregun) + " " + \
    random.choice(verbos) + " " + \
    random.choice(adverbios) + " " + \
    random.choice(jugadores) + "?"
    #random.choice(sustantivos) + "?"
    return pregunta

x = preguntar()

print x
