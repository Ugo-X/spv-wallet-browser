import * as bip39 from "bip39";
import * as bsv from "bsv";

const getWif = (seedPhrase: string, isOrd?: boolean) => {
  const seed = bip39.mnemonicToSeedSync(seedPhrase);

  // Use bsv's HDPrivateKey to generate master node
  console.log(bsv);
  const masterNode = bsv.HDPrivateKey.fromSeed(seed);
  const derivationPath = `m/0'/${isOrd ? "237" : "236"}'/0'/0/0`;
  const childNode = masterNode.deriveChild(derivationPath);

  if (!childNode.privateKey) return;

  const wif = childNode.privateKey.toWIF();

  return wif;
};

export const generateKeys = () => {
  const mnemonic = bip39.generateMnemonic();
  const walletWif = getWif(mnemonic);
  const walletPk = bsv.PrivateKey.fromWIF(walletWif);
  const walletAddress = bsv.PublicKey.fromPrivateKey(walletPk)
    .toAddress()
    .toString();

  const ordWif = getWif(mnemonic, true);
  const ordPk = bsv.PrivateKey.fromWIF(ordWif);
  const ordAddress = bsv.PublicKey.fromPrivateKey(ordPk).toAddress().toString();

  const keys = {
    mnemonic,
    walletWif,
    walletAddress,
    ordWif,
    ordAddress,
  };

  console.log(keys);
  return keys;
};
