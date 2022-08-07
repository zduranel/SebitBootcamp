import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit {

  isUpdateBlog:boolean = false;

  form = new FormGroup({
    title:new FormControl(null,[Validators.required]),
    body:new FormControl(null,[Validators.required]),

  })

  constructor(
    private blogService:BlogService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BlogDialogComponent>) {

      // debugger;
    //düzenleme sayfasına git
    if(data.isUpdate)
    {
      this.isUpdateBlog=true;
      this.form.patchValue({
        title:data.blog.title,
        body:data.blog.body,
      })
    }
    //görüntüleme sayfasıne git
    else
    {

    }
   }

  ngOnInit(): void {}

    close() {
      this.dialogRef.close();
    }

    onSubmit(){
      const request = {
        title:this.form.get('title')?.value,
        body:this.form.get('body')?.value,
        imageId:this.data.blog.imageId,
        userId:this.data.blog.userId,
      };

      this.blogService.updatePost(this.data.blog.id,request).subscribe((res) =>{
        this.close();

      });
    }




}
