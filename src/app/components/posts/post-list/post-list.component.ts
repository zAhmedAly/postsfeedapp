import { PostsService } from "./../posts.service";
import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading = false;

  constructor(private postsSerive: PostsService) {}

  ngOnInit() {
    this.isLoading = true;
    setInterval(() => {
      this.posts = this.postsSerive.getPosts();
      this.isLoading = false;
    }, 1500);
  }
}
