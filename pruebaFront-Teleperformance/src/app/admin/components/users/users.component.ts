import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { NbDialogService } from '@nebular/theme';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() userName: string;
  posts: Post
  postFiltered: Post
  constructor(
    private postService: PostService,
    private dialogService: NbDialogService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchPost();
  }
  ngOnChanges(): void {
    if (this.userName) {
      this.searchUserByName(this.userName);
    }
    else {
      this.postFiltered = { ...this.posts };
    }

  }
  fetchPost() {
    this.postService.getPost()
      .subscribe(res => {
        this.posts = res;
        this.postFiltered = { ...this.posts };
      },
        (err: HttpErrorResponse) => {
          this.toastrService.error(`${err.error}`, 'Major Error', {
            timeOut: 3000,
          });
        }
      );
  }
  searchUserByName(userName: string) {

    this.postFiltered.data = this.posts.data.filter(user => user.first_name.toLocaleLowerCase().startsWith(userName));
  }

  openModal(id: number) {
    this.dialogService.open(UserDetailComponent, {
      context: {
        idUser: id
      }
    })
  }
}
