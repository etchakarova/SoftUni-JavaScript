function assemblyLine() {
    const assemblyLine = createAssemblyLine();

    const myCar = {
        make: 'Toyota',
        model: 'Avensis'
    };

    assemblyLine.hasClima(myCar);
    console.log(myCar.temp);
    myCar.tempSettings = 18;
    myCar.adjustTemp();
    console.log(myCar.temp);

}