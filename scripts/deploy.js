const deploy = async () => {
    //trae la información de la cuenta con la que vamos a desplegar el contrato
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contract with the account:", deployer.address);
    //traer información del contrato inteligente el parametro debe ser el nombre del SC
    const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
    const deployed = await PlatziPunks.deploy();
  
    console.log("Platzi Punks is deployed at:", deployed.address);
  };
  
  deploy()
    .then(() => process.exit(0))
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });