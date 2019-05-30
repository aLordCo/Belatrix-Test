const fixedData = {
    departments: {},
    provinces: {},
    districts: {}
};

function adjustData(data) {
    data.map(data => {
        data = data.split('/').map((data) => {
            return data.trim();
        });
        
        const entity = {};
        
        entity.codeDepartment = data[0].match(/\d+/g)[0];
        entity.nameDepartment = data[0].match(/[^\s]+/g)[1];
        entity.codeProvince = data[1] !== '' ? data[1].match(/\d+/g)[0] : '-';
        entity.nameProvince = data[1] !== '' ? data[1].match(/[^\s]+/g)[1] : '-';
        entity.codeDistrict = data[2] !== '' ? data[2].match(/\d+/g)[0] : '-';
        entity.nameDistrict = data[2] !== '' ? data[2].match(/\D+/g) : '-';
        
        if(data[2] !== '') {
            fixedData.districts[entity.codeDistrict] = entity;
        } else if(data[1] !== '') {
            fixedData.provinces[entity.codeProvince] = entity;
        } else {
            fixedData.departments[entity.codeDepartment] = entity;
        }

        return data;
    });

    return fixedData;
}

export default adjustData;