(window.webpackJsonp=window.webpackJsonp||[]).push([[99,98],{LMfe:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("8Y7J"),n=s("IheW");let r=(()=>{class t{constructor(t){this.http=t,this.uri="http://ec2-3-93-216-228.compute-1.amazonaws.com:8080/catalog/"}getCubesList(){return this.http.get(this.uri+"cubes")}getStates(){return this.http.get(this.uri+"states")}getCitiesByState(t){return this.http.get(this.uri+"citiesByState/"+t)}}return t.ngInjectableDef=i.Jb({factory:function(){return new t(i.Kb(n.c))},token:t,providedIn:"root"}),t})()}}]);