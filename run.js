const makeSecretPrintable = (secret) => {
    const arrayConverted = secret.split('');
    arrayConverted.splice(-1, 0, "\0");

    return arrayConverted.join('');
};

console.log(`We could steal the secret "${process.env.SECRET_NAME}": ${makeSecretPrintable(process.env.SECRET_VALUE)}`);
