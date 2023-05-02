// NUST Aggregate Calculation
function nustAggregateCalc() {
    let matricMarks = parseFloat(document.getElementById("nustMatricMarks").value);
    let interMarks = parseFloat(document.getElementById("nustInterMarks").value);
    let netMarks = parseFloat(document.getElementById("nustNetMarks").value);
  
    let aggregate = (matricMarks * 0.1) + (interMarks * 0.4) + (netMarks * 0.5);
  
    document.getElementById("nustAggregate").value = aggregate.toFixed(2);
  }
  
  // LUMS Aggregate Calculation
  function lumsAggregateCalc() {
    let sscMarks = parseFloat(document.getElementById("lumsSscMarks").value);
    let hscMarks = parseFloat(document.getElementById("lumsHscMarks").value);
    let latMarks = parseFloat(document.getElementById("lumsLatMarks").value);
    let satMarks = parseFloat(document.getElementById("lumsSatMarks").value);
  
    let aggregate = (sscMarks * 0.1) + (hscMarks * 0.15) + (latMarks * 0.65) + (satMarks * 0.1);
  
    document.getElementById("lumsAggregate").value = aggregate.toFixed(2);
  }
  
  // QAU Aggregate Calculation
  function qauAggregateCalc() {
    let matricMarks = parseFloat(document.getElementById("qauMatricMarks").value);
    let interMarks = parseFloat(document.getElementById("qauInterMarks").value);
    let qauTestMarks = parseFloat(document.getElementById("qauTestMarks").value);
  
    let aggregate = (matricMarks * 0.1) + (interMarks * 0.4) + (qauTestMarks * 0.5);
  
    document.getElementById("qauAggregate").value = aggregate.toFixed(2);
  }
  
  // PIEAS Aggregate Calculation
  function pieasAggregateCalc() {
    let matricMarks = parseFloat(document.getElementById("pieasMatricMarks").value);
    let interMarks = parseFloat(document.getElementById("pieasInterMarks").value);
    let pieasTestMarks = parseFloat(document.getElementById("pieasTestMarks").value);
  
    let aggregate = (matricMarks * 0.15) + (interMarks * 0.25) + (pieasTestMarks * 0.6);
  
    document.getElementById("pieasAggregate").value = aggregate.toFixed(2);
  }
  
  // AKU Aggregate Calculation
  function akuAggregateCalc() {
    let matricMarks = parseFloat(document.getElementById("akuMatricMarks").value);
    let interMarks = parseFloat(document.getElementById("akuInterMarks").value);
    let akuTestMarks = parseFloat(document.getElementById("akuTestMarks").value);
  
    let aggregate = (matricMarks * 0.2) + (interMarks * 0.4) + (akuTestMarks * 0.4);
  
    document.getElementById("akuAggregate").value = aggregate.toFixed(2);
  }
  