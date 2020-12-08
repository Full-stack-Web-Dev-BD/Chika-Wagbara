export const search = (data, searchTerm) => data.filter(data => Object.values(data).filter(v => v.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) !== -1).length > 0);
