import fs from 'fs';
import ajv from 'ajv';
import { TokenList } from 'types';

function run() {
  const list: TokenList = JSON.parse(
    fs.readFileSync('ZORA.tokenlist.json', 'utf-8')
  );
  const schema = JSON.parse(
    fs.readFileSync('src/tokenlist.schema.json', 'utf-8')
  );
  const validate = new ajv().compile(schema);

  const valid = validate(list);

  if (!valid) {
    console.error(validate.errors);
    process.exit(1);
  } else {
    console.log('Tokenlist is valid!');
  }
}

run();
