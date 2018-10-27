
describe("Функция умножения", ()=>{
    for(let i=0;i<10;i++){
        it(`${i}*${10-i}=${i*(10-i)}`,()=>{
            assert.equal(multiply(i,10-i),i*(10-i));
        })
    }
});



describe("Функция разворота строки", ()=>{
    it("test=>tset",()=>{
        assert.equal(reverse("test"),"tset");
    });
    it("caseTest=>tseTesac",()=>{
        assert.equal(reverse("caseTest"),"tseTesac");
    });
    it("1234test567=>765tset4321",()=>{
        assert.equal(reverse("1234test567"),"765tset4321");
    })
});


describe("Сумма элементов массива",()=>{
    it("[1,2,3,4]=>10",()=>{
        assert.equal(arrSum([1,2,3,4]),10);
    });
    it("[100,-50,10]=>60",()=>{
        assert.equal(arrSum([100,-50,10]),60);
    });
    it("[1,2,'test']=>NaN",()=>{
        assert.equal(arrSum([1,2,'test']),"ERROR");
    });
});