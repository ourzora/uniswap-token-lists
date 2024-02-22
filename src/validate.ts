import fs from 'fs';
import ajv from 'ajv';
import addFormats from 'ajv-formats';
import { TokenList } from 'types';

function run() {
  const list: TokenList = JSON.parse(
    fs.readFileSync('ZORA.tokenlist.json', 'utf-8')
  );
  const schema = JSON.parse(
    fs.readFileSync('src/tokenlist.schema.json', 'utf-8')
  );
  const validator = new ajv();
  addFormats(validator);

  const valid = validator.validate(schema, list);

  if (!valid) {
    console.error(validator.errors);
    process.exit(1);
  } else {
    console.log('Tokenlist is valid!');
  }
}

run();
