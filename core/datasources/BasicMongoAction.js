const { DataSource } = require('apollo-datasource');

class BasicMongoAction extends DataSource {

    constructor(collection) {
        super();
        this.collection = collection;
    }

    getCollections() {
        return this.collection.find({});
    }

    getCollectionById(_id) {
        return this.collection.findById(_id);
    }

    getCollectionByFields(collection) {
        return this.collection.find({...collection});
    }

    getOneCollectionByFields(collection) {
        return this.collection.findOne({...collection});
    }

    async addCollection(collection) {
        const newCollection = new this.collection(collection);

        await newCollection.save();

        return newCollection;
    }

    updateCollection(collection) {
        return this.collection.findOneAndUpdate({ _id: collection._id }, collection, { useFindAndModify: false});
    }

    async removeCollectionById(_id) {
        await this.collection.findByIdAndRemove(_id);

        return this.getCollection();
    }
}

module.exports = BasicMongoAction;