import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  articleId:any;
  articlesData:Array<any> = [];
  username:string = '';
  comment:string = '';

  constructor(
    private router:ActivatedRoute,
    private articleService:ArticleService,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.articleId = this.router.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticles().subscribe((res)=>{
      this.articlesData = res;
    })
  }

  addComment(){
  if (this.username == '' || this.comment == '' )
  {
    this._snackBar.open('Lütfen Tüm Alanları Doldurunuz !','Kapat');
  }
  else{
    let putObj = {
      username:this.username,
      comment:this.comment,
    };
    this.articlesData[this.articleId].comments.push(putObj);
    this.articleService.updateArticle(this.articlesData[this.articleId]).subscribe((res)=>{
      //INPUTLARI SIFIRLAMAK İÇİN
      this.username = '';
      this.comment = '';


    });

  }

  }

}
