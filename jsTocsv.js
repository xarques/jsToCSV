/* eslint-disable no-unused-vars */
import { pathOr } from 'ramda';
import fs from 'fs-extra';

const jsToArray = (obj) => {
  const result = [];
  if (typeof obj === 'string') {
    result.push(obj);
  } else {
    Object.entries(obj).forEach(([key2, value2]) => {
      if (typeof value2 === 'string') {
        result.push([key2, '', '', '', '', value2]);
      } else {
        Object.entries(value2).forEach(([key3, value3]) => {
          if (typeof value3 === 'string') {
            result.push([key2, key3, '', '', '', value3]);
          } else {
            Object.entries(value3).forEach(([key4, value4]) => {
              if (typeof value4 === 'string') {
                result.push([key2, key3, key4, '', '', value4]);
              } else {
                Object.entries(value4).forEach(([key5, value5]) => {
                  if (typeof value5 === 'string') {
                    result.push([key2, key3, key4, key5, '', value5]);
                  } else {
                    Object.entries(value5).forEach(([key6, value6]) => {
                      if (typeof value6 === 'string') {
                        result.push([key2, key3, key4, key5, key6, value6]);
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  return result;
};

const jsTocsv = (obj1, obj2) => {
  const result = jsToArray(obj1);
  return result.reduce((accumulator, row) => {
    const keys = row.slice(0, row.length - 1).filter((r) => r !== '');
    const i18Trans = pathOr('', keys, obj2);
    const i18nRow = [...row, i18Trans];
    const line = i18nRow
      .map((column) => {
        return `"${column}"`;
      })
      .join(',');
    if (accumulator) return `${accumulator}\n${line}`;
    return line;
  }, '');
};

// const generateCSV = (obj1, obj2) => console.log(jsTocsv(obj1, obj2));

const getCSV = async ({ title, obj1, obj2, output }) => {
  await fs.ensureDir(`${output}`);
  const writePath = `${output}/${title}.csv`;
  return fs.writeFile(writePath, jsTocsv(obj1, obj2), 'utf8');
};

// eslint-disable-next-line import/prefer-default-export
export { jsTocsv, getCSV };
