import{a as h,b as S}from"./chunk-SACAXMFZ.js";import{Ab as f,Gb as x,Ha as l,La as a,Ma as g,V as d,Y as m,cb as p,ib as u,jb as v,kb as r,lb as n,mb as b,zb as c}from"./chunk-ZO3JCBXH.js";import"./chunk-TMC7WMLO.js";var w=(t,e)=>e._id;function C(t,e){if(t&1&&(r(0,"div",2),b(1,"img",3),r(2,"div",4)(3,"p",5),c(4),n()()()),t&2){let s=e.$implicit;a(),p("src",s.image,l)("alt",s.name),a(3),f(s.name)}}var L=(()=>{let e=class e{constructor(i){this._FlowbiteService=i,this._CategoriesService=d(h),this.categoriesList=[],this._FlowbiteService.loadFlowbite(()=>{})}ngOnInit(){this.categoriesSub=this._CategoriesService.getAllCategories().subscribe({next:i=>{this.categoriesList=i.data}})}ngOnDestroy(){this.categoriesSub?.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(g(S))},e.\u0275cmp=m({type:e,selectors:[["app-categories"]],standalone:!0,features:[x],decls:7,vars:0,consts:[[1,"text-center","font-semibold","text-main","my-8","text-[30px]","text-secondary"],[1,"grid","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","xl:grid-cols-5","gap-4","py-4"],[1,"max-w-sm","text-center","bg-white","border","border-gray-200","rounded-lg","shadow","max-md:m-auto"],[1,"max-md:w-80","rounded-t-lg","w-full","h-[350px]","border-b-2","border-gray-100",3,"src","alt"],[1,"p-5"],[1,"mb-3","font-normal","text-gray-700"]],template:function(o,y){o&1&&(r(0,"section")(1,"div")(2,"h1",0),c(3,"Categories"),n(),r(4,"div",1),u(5,C,5,3,"div",2,w),n()()()),o&2&&(a(5),v(y.categoriesList))}});let t=e;return t})();export{L as CategoriesComponent};
