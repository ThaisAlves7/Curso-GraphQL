import { RESTDataSource } from '@apollo/datasource-rest';

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/posts/';
  }

  // Trazer vários posts
  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    });
  }

  // Trazer um post
  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }
}
