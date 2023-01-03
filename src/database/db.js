const data = require('./data.json');
// const data = require('./data3.json');

export default {
	findAll: () => data,
	findById: id => data.find(product => product.id === id),
	findByCategory: category => data.filter(product => product.category === category),
	findByType: type => data.filter(product => product.type === type),
	findTypesOfACategory: category => {
		let types = [];
		data.forEach(data => {
			if (data.category === category) if (!types.includes(data.type)) types.push(data.type);
		});
		return types;
	},
    findSimilarProducts: id => data.filter(product => product.category === (data.find(product => product.id === id).category)),
}

// Code we did not use

// findByColor: color => data.filter(product => product.color === color),

// findByCategoryAndType: (category,type) => data.filter(product => product.category === category && product.type === type),

// findByLimit: (skip, limit) => {
//     let result = {
//         products: [],
//         remaining: data.length,
//         size: data.length
//     };
//     if (skip * limit + limit <= data.length) {
//         for (let i = skip * limit; i < skip * limit + limit; i++) result.products.push(data[i]);
//         result.remaining = data.length - (skip * limit + limit);
//     }
//     return result;
// },

// findByLimitAndCategory: (skip,limit,category) => {

//     let productsByCategory = data.filter( product => product.category === category)
//     let result = {
//         products: [],
//         remaining: productsByCategory.length,
//         size: productsByCategory.length
//     };
//     if (skip * limit + limit <= productsByCategory.length) {
//     for( let i=skip*limit; i<skip*limit+limit && i<productsByCategory.length; i++)
//         result.products.push(productsByCategory[i])
//     result.remaining = productsByCategory.length - (skip * limit + limit);
//     }
//     return result
// }  ,
