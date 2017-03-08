import json2csv from 'json2csv'

export default (data, fields, fieldNames, fileName) => {
  try {
    var result = json2csv({
      data: data,
      fields: fields,
      fieldNames: fieldNames
    });
    var csvContent = 'data:text/csv;charset=GBK,\uFEFF' + result;
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${(fileName || 'file')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error(err);
  }
}
