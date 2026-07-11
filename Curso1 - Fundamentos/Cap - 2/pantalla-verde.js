// ============================================
// DEL ALGORITMO AL CÓDIGO: Pantalla Verde
// ============================================

/**
 * Algoritmo de Chroma Key explicado paso a paso.
 * No usa imágenes reales, solo arrays de colores para ilustrar la lógica.
 * Esto es lo que diseñamos en papel, ahora en código.
 */

const fgImage = ["verde", "rojo", "azul"];
const bgImage = ["amarillo", "blanco", "negro"];
const outputImage = new Array(fgImage.length);

console.log("=== EJECUTANDO ALGORITMA DE CHROMA KEY ===");
console.log("Imagen Original (fgImage):", fgImage);
console.log("Imagen de Fondo (bgImage):  ", bgImage);
console.log("-------------------------------------------");

for (let i = 0; i < fgImage.length; i++) {
  const pixelActual = fgImage[i];
  console.log(`\n📍 Paso ${i + 1}: Procesando píxel en posición [${i}]`);
  console.log(`   ↳ Color en fgImage: "${pixelActual}"`);
  if (pixelActual === "verde") {
    // "Entonces usa el píxel de bgImage"
    outputImage[i] = bgImage[i];
    console.log(`   ⚠️ ¡Es VERDE! Reemplazando con fondo: "${bgImage[i]}"`);
  } else {
    // "SI NO, usa el píxel de fgImage directamente"
    outputImage[i] = pixelActual;
    console.log(`   ✅ NO es verde. Manteniendo original: "${pixelActual}"`);
  }

  console.log(`   ➡️ outputImage[${i}] = "${outputImage[i]}"`);
}
console.log("\n===========================================");
console.log("RESULTADO FINAL (outputImage):", outputImage);
console.log("===========================================");
const resultadoEsperado = ["amarillo", "rojo", "azul"];
let esCorrecto = true;

for (let i = 0; i < outputImage.length; i++) {
  if (outputImage[i] !== resultadoEsperado[i]) {
    esCorrecto = false;
    break;
  }
}

if (esCorrecto) {
  console.log(
    "✅ ¡PRUEBA SUPERADA! El algoritmo funciona exactamente como se diseñó en papel.",
  );
} else {
  console.log(
    "❌ ERROR: El resultado no coincide con lo esperado. Hay un bug en la lógica.",
  );
  console.log("   Esperado:", resultadoEsperado);
  console.log("   Obtenido:", outputImage);
}
