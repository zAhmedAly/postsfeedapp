import { Injectable, OnInit } from "@angular/core";
import { Post } from "./post";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: Post[] = [];
  constructor() {
    this.posts = [
      {
        title: "First Post",
        content:
          "Anim voluptate dolore incididunt enim dolor est adipisicing fugiat ipsum ea eu enim laboris laboris. Sint consequat veniam ipsum reprehenderit duis tempor cupidatat sint labore est. Laboris ea deserunt nulla quis enim non laborum cillum minim. Exercitation aliqua incididunt sit reprehenderit excepteur dolor est adipisicing minim eiusmod nisi incididunt. Ex cillum fugiat pariatur eiusmod nostrud ullamco cupidatat occaecat minim do nulla veniam."
      },
      {
        title: "Second Post",
        content:
          "Eu fugiat magna pariatur excepteur consequat minim officia ullamco qui culpa nisi. Sit culpa exercitation in magna et ea est occaecat incididunt esse officia. Lorem commodo ea labore incididunt. Aute do velit elit sit quis est commodo. Sit commodo magna nostrud id duis quis qui consequat aliqua eiusmod in. Voluptate elit magna voluptate irure quis. Qui cupidatat duis duis nostrud."
      },
      {
        title: "Third Post",
        content:
          "Exercitation proident irure culpa mollit do in magna id est proident tempor elit laboris. Aliqua irure id dolore anim nulla dolore cillum anim eu. Ut ad reprehenderit anim consequat ad ad velit dolore sit in. Ad minim exercitation eu non et ex. Laborum velit Lorem cupidatat aliqua ea Lorem voluptate Lorem dolore consequat nisi. Sunt aliqua Lorem et fugiat cupidatat incididunt id labore ex cupidatat exercitation amet."
      }
    ];
  }
  getPosts() {
    return [...this.posts];
  }
}
