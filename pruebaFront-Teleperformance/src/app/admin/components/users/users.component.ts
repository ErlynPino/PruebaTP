import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { NbDialogService } from '@nebular/theme';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() userName: string;
  posts: Character;
  postFiltered: Character;
  constructor(
    private postService: PostService,
    private dialogService: NbDialogService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.fetchPost();
  }
  fetchPost() {
    this.postService.getPost().subscribe(
      (res) => {
        this.posts = res;
        this.postFiltered = { ...this.posts };
        console.log(this.postFiltered);
      },
      (err: HttpErrorResponse) => {
        this.toastrService.error(`${err.error}`, 'Major Error', {
          timeOut: 3000,
        });
      }
    );
  }
}
