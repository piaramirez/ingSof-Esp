// ============================================
// APLICANDO LOS 7 PASOS A UN PROBLEMA NUEVO
// Problema: Contar cuántos números en un array son > 10
// ============================================

/**
 * PASO 1: Resolver instancia pequeña a mano
 * Datos: [5, 12, 8, 15, 3]
 * ¿Cuántos > 10? 12 y 15 -> Respuesta: 2
 * 
 * PASO 2: Escribir los pasos exactos (para este array específico)
 * 1. Agarro el primer número: 5. ¿Es > 10? No. No lo cuento.
 * 2. Agarro el segundo número: 12. ¿Es > 10? Sí. Llevo 1.
 * 3. Agarro el tercer número: 8. ¿Es > 10? No. Sigo con 1.
 * 4. Agarro el cuarto número: 15. ¿Es > 10? Sí. Llevo 2.
 * 5. Agarro el quinto número: 3. ¿Es > 10? No. Termino con 2.
 * 
 * PASO 3: Encontrar patrones (Generalizar)
 * - REPETICIÓN: "Agarrar el siguiente número" se repite 5 veces (longitud del array).
 * - CONDICIÓN: "¿Es > 10?" -> SI (contar +1), NO (no contar).
 * - VALOR: El 10 viene del enunciado, es un parámetro.
 * 
 * ALGORITMO:
 * Empezar con contador = 0
 * Para cada número en el array:
 *    SI el número > 10:
 *       contador = contador + 1
 *    FIN SI
 * FIN PARA
 * Devolver contador
 * 
 * PASO 4: Probar a mano con otros datos
 * Datos: [11, -2, 10, 25]
 * - 11 > 10? Sí -> contador = 1
 * - -2 > 10? No -> contador = 1
 * - 10 > 10? No (no es estrictamente mayor) -> contador = 1
 * - 25 > 10? Sí -> contador = 2
 * Resultado esperado: 2. Algoritmo funciona.
 */

// PASO 5: Traducir a código JavaScript
function contarMayoresQueDiez(numeros) {
    // Inicializar contador
    let contador = 0;
    
    // Para cada número en el array
    for (let i = 0; i < numeros.length; i++) {
        const numeroActual = numeros[i];
        
        // Condición: ¿Es > 10?
        if (numeroActual > 10) {
            contador = contador + 1; // Incrementar contador
        }
    }
    
    // Devolver el resultado
    return contador;
}

// Versión más genérica (parámetro en vez de 10 fijo)
function contarMayoresQue(numeros, umbral) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > umbral) {
            contador++;
        }
    }
    return contador;
}

// PASO 6: Ejecutar casos de prueba
console.log('=== CASOS DE PRUEBA ===');

// Caso 1: El ejemplo original
const resultado1 = contarMayoresQueDiez([5, 12, 8, 15, 3]);
console.log(`Caso 1: [5, 12, 8, 15, 3] -> ${resultado1} (Esperado: 2) ${resultado1 === 2 ? '✅' : '❌'}`);

// Caso 2: Array vacío
const resultado2 = contarMayoresQueDiez([]);
console.log(`Caso 2: [] -> ${resultado2} (Esperado: 0) ${resultado2 === 0 ? '✅' : '❌'}`);

// Caso 3: Todos menores
const resultado3 = contarMayoresQueDiez([1, 2, 3]);
console.log(`Caso 3: [1, 2, 3] -> ${resultado3} (Esperado: 0) ${resultado3 === 0 ? '✅' : '❌'}`);

// Caso 4: Todos mayores
const resultado4 = contarMayoresQueDiez([11, 20, 100]);
console.log(`Caso 4: [11, 20, 100] -> ${resultado4} (Esperado: 3) ${resultado4 === 3 ? '✅' : '❌'}`);

// Caso 5: Con el número 10 exacto
const resultado5 = contarMayoresQueDiez([10, 10.1, 9.9]);
console.log(`Caso 5: [10, 10.1, 9.9] -> ${resultado5} (Esperado: 1) ${resultado5 === 1 ? '✅' : '❌'}`);

// Caso 6: Versión genérica con umbral personalizado
const resultado6 = contarMayoresQue([1, 5, 10, 15, 20], 12);
console.log(`Caso 6: [1,5,10,15,20] > 12 -> ${resultado6} (Esperado: 2) ${resultado6 === 2 ? '✅' : '❌'}`);

// PASO 7: Si algún caso falla, depurar.
// Por ejemplo, si el Caso 5 diera 0 en vez de 1, sabríamos que hay un bug.
// Preguntaríamos: ¿Es error de algoritmo (> vs >=)? Volvemos al paso 3.
// ¿Es error de implementación (escribí < en vez de >)? Volvemos al paso 5.

console.log('\n=== RESUMEN DE PRUEBAS ===');
console.log('Si ves ✅ en todas, el algoritmo y la implementación son correctos.');
console.log('Si ves ❌ en alguna, aplica el PASO 7 y depura.');