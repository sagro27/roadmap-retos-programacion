#Función día de la semana sin parámetro///
def que_dia_es_hoy ():
    print("Viernes")
    
que_dia_es_hoy()


#Función saludar con parámetro///
def Saludar_persona (nombre):
    print("Hola " + nombre)

Saludar_persona("Sergio")
Saludar_persona("Alejandro")


#función conversor de divisa con retorno ///
def convertir_dollar_a_pesos_cop(pesos):
    return (4078 * pesos)

dollar = 100  # --> declaracion de una variable local
pesos_cop = convertir_dollar_a_pesos_cop(dollar)  
print("Cop ", pesos_cop)
 
 
 
# Función dentro de otra funció es posible ///
def Saludar_persona (nombre):
    print("Hola " + nombre)
    
    def primer_apellido (apellido):
        print(f"tu apellido es {apellido}")
    
    primer_apellido("Gil")

Saludar_persona("Sergio")


print(dollar)

#alguanas funciones del lenguaje 

numeros = [2, 5, 7, 1]

cadena = "artificial"

elementos = ("tierra", "aire", "fuego", "agua")

suma = sum(numeros)
minimo = min(numeros)
orden = sorted(numeros)

caracteres = len(cadena)

cuatro_elementos = list(enumerate(elementos))

print(suma)
print(minimo)
print(orden)
print(caracteres)
print(cuatro_elementos)
print(type(numeros))


#variables locales y globales
#ambito o scope

global_variable = "python"

print(global_variable)

def hello_python():
    local_var = "Hola"
    print(f"{local_var} {global_variable}!")
    
hello_python()

print(global_variable)
#print(local_var) No se puede aceder desde fuera de la funcion




# DIFICULTAD EXTRA

def hide_and_seek(string1 , string2)-> int:
    count = 0
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print(f"{string1} And {string2}")
        elif i % 3 == 0:
            print(string1)
        elif i % 5 == 0:
            print(string2)
        else:
            print(i)
            count += 1
    return count   



print(hide_and_seek("Hide", "Seek"))           
     
