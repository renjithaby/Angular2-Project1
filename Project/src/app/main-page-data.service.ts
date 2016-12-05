import { Component, Injectable } from '@angular/core';

@Injectable()
export class MainPageDataService {
    page1Data = {
            "section2":{
                "panels":[
                    {"title":"LOREM IPSUM LOREM","content":"Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum"},
                    {"title":"LOREM IPSUM LOREM","content":"Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum"}
                ]
            },
            "section3":{
                "mainpanels":[
                    {"title":"LOREM IPSUM LOREM",
                     "content":"Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum",
                     "btnText" : "LOREM IPSUM"},
                    {"title":"LOREM IPSUM LOREM",
                    "content":"Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum Lopersum ipsum Lopersum ipsumLopersum ipsum Lopersum ipsum",
                    "btnText" : "LOREM IPSUM"}
                ],
                "subpanels":[
                    {"title":"LOREM IPSUM","content":"EXAMPLE TEXT","image": "img_4.jpg","btnText" : "LOREM IPSUM"},
                    {"title":"LOREM IPSUM","content":"EXAMPLE TEXT","image": "img_4.jpg","btnText" : "LOREM IPSUM"},
                    {"title":"LOREM IPSUM","content":"EXAMPLE TEXT","image": "img_4.jpg","btnText" : "LOREM IPSUM"},
                    {"title":"LOREM IPSUM","content":"EXAMPLE TEXT","image": "img_4.jpg","btnText" : "LOREM IPSUM"}
                ]
            },
            "section5":{
                "content":"lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Korem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Korem Ipsum"
            },
            "section6":{
                "linkNames":["Link1","Link2","Link3","Link4","Link5","Link6"],
                "content":"lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Korem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Korem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Korem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Korem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            }
        };

    getPageData() :any{
        return (this.page1Data);
    }


    getSection2Data()  {
       return ( this.page1Data.section2);
    }

    getSection3Data()  {
        return ( this.page1Data.section3);
    }

    getSection5Data()  {
        return ( this.page1Data.section5);
    }

    getSection6Data()  {
        return ( this.page1Data.section6);
    }

}
