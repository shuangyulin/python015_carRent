const base = {
    get() {
        return {
            url : "http://localhost:8080/djangozq00i/",
            name: "djangozq00i",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汽车租赁管理网站"
        } 
    }
}
export default base
