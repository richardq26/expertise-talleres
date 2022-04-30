const deducibleService = require("../src/Deducible/service");
const distritoService = require("../src/Distrito/service");
const tallerService = require("../src/Taller/service");

/////////////////////////////////////////////////
///////// Pruebas unitarias de servicios ////////
/////////////////////////////////////////////////

describe("Componente Distrito", () => {
  test("Obtener distritos", async() => {
    const response = await distritoService.getDistritos();
    expect(response.toBeDefined);
  });
});

describe("Componente Deducible", () => {
  test("Obtener textos", async() => {
    const response = await deducibleService.getDeduciblesText();
    expect(response.toBeDefined);
  });
  test("Obtener por texto", async() => {
    let textoEjemplo = "AUSENCIA DE CONTROL EN TALLERES JAPAN AUTOS, 22% del DEL MONTO DEL SINIESTRO, Mínimo de US$500.00. AUSENCIA DE CONTROL";
    const response = await deducibleService.getDeduciblesByText(textoEjemplo);
    expect(response.toBeDefined);
  });
});

describe("Componente Taller", () => {
  test("Buscar taller", async() => {
    const response = await tallerService.buscarTaller();
    expect(response.toBeDefined);
  });

});