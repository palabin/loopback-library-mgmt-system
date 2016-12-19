'use strict';

module.exports = function(Book) {

  Book.byId = function (id, next) {
    var dbClause = {
      where: {
        id: id
      }
    };
    Book.findOne(dbClause, next);
  };

  Book.remoteMethod('byId', {
    http: {
      path: '/:id',
      verb: 'get'
    },
    accepts: [{
      arg: 'id',
      type: 'string',
      description: 'Book Id',
      required: true,
      default: ''
    }],
    returns: {
      arg: 'book',
      type: 'Book'
    },
    description: 'Get book Details By Id',
    notes: 'Returns Book object for a given product identifier'
  });

  Book.addBook = function (bookDetails, next) {
    Book.create(bookDetails, next);
  };

  Book.remoteMethod('addBook', {
    http: {
      path: '/addBook',
      verb: 'post'
    },
    accepts: [{
      arg: 'bookDetails',
      type: 'Book',
      description: 'Book details in JSON format',
      required: true,
      http: {
          source: 'body'
        }
    }],
    returns: {
      arg: 'response',
      type: 'string'
    },
    description: 'Add Book details',
    notes: 'Returns Book object for a given product identifier'
  });

  Book.deleteBook = function (bookId, next) {
    Book.destroyById(bookId, next);
  };

  Book.remoteMethod('deleteBook', {
    http: {
      path: '/deleteBook',
      verb: 'post'
    },
    accepts: [{
      arg: 'bookId',
      type: 'string',
      description: 'Book ID',
      required: true
    }],
    returns: {
      arg: 'response',
      type: 'string'
    },
    description: 'Deletes Book details by ID',
    notes: 'Returns Book object for a given product identifier'
  });
};
