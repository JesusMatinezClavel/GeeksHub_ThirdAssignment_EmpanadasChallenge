// export const fn = (a, b, c) => {
//    let res
//    ((a + b + c) < 40) && ((a + b + c) % 3 === 0)
//       ? res = (a * 12 + b * 14 + c * 16) / 3
//       : null
//    return Math.ceil(res)
// }

export const fn = (a, b, c) => {
   let suma = 0
   let media = a + b + c
   switch (true) {
      case (a < 0 || b < 0 || c < 0):
         throw new Error('Los valores de entrada no pueden ser negativos.')
         break
      case (media >= 40):
         throw new Error('Los valores de entrada no pueden ser mayores a 40.')
         break
      case (media % 3 !== 0):
         throw new Error('Los valores de entrada tienen que ser multiplos de 3')
         break
      case ((media < 40) && (media % 3 === 0)):
         for (let i = 0; i < media; i += 3) {
            if (a === 0 && b === 0 && c === 0) {
               console.log("32")
               console.log(a, b, c)
               console.log(suma)
               break
            } else if (a === 0 && b <= 0 && c <= 0) {
               suma += 15
               console.log("39")
               console.log(a, b, c)
               console.log(suma)
               break;
            } else if (a <= 0 && b <= 0 && c === 0) {
               suma += 13
               console.log("30")
               console.log(a, b, c)
               console.log(suma)
               break;
            } else if (c > a && b <= 0 && a < 0) {
               suma += 16
               a--
               c--
               console.log("1")
               console.log(suma)
               console.log(a, b, c)
            } else if (a <= 0 && c <= 0 && b > 0) {
               suma += 14
               b--
               console.log("5")
               console.log(a, b, c)
               console.log(suma)
            } else if (a > 0 && c > 0) {
               suma += 14
               a--
               b--
               c--
               console.log("2")
               console.log(a, b, c)
               console.log(suma)

            } else if (a <= 0 && c > b) {
               suma += 16
               c -= 2
               b--
               console.log("8")
               console.log(a, b, c)
               console.log(suma)

            } else if (c == b && a <= 0) {
               suma += 15
               c -= 2
               b -= 2
               console.log("9")
               console.log(a, b, c)
               console.log(suma)

            } else if (a <= 0) {
               suma += 16
               b -= 2
               c--
               console.log("3")
               console.log(a, b, c)
               console.log(suma)

            } else if (c <= 0 && a > b) {
               suma += 13
               a -= 2
               b--
               console.log("4")
               console.log(a, b, c)
               console.log(suma)

            } else if (a == b && c <= 0) {
               suma += 13
               a -= 2
               b -= 2
               console.log("99")
               console.log(a, b, c)
               console.log(suma)

            } else if (c <= 0) {
               suma += 14
               b -= 2
               a--
               console.log("32")
            } else {
               suma += 14
               a--
               b--
               c--
               console.log("5")
               console.log(a, b, c)
               console.log(suma)
            }
         }
   }
   return suma
}


console.log(fn(12, 15, 12))