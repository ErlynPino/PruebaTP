import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { PostService } from 'src/app/core/services/post.service';
import { PostUser } from '../../../core/models/post-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  idUser: number;
  post: PostUser
  constructor(
    protected dialogRef: NbDialogRef<UserDetailComponent>,
    private postService: PostService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchUserById();

  }

  fetchUserById() {
    this.postService.getPostById(this.idUser)
      .subscribe(res => {
        this.post = res;
      },
        (err: HttpErrorResponse) => {
          this.toastrService.error(`${err.error}`, 'Major Error', {
            timeOut: 3000,
          });
        }
      );

  }

}
