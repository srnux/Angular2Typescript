System.register(['./init-caps-pipe'], function(exports_1) {
    var init_caps_pipe_1;
    return {
        setters:[
            function (init_caps_pipe_1_1) {
                init_caps_pipe_1 = init_caps_pipe_1_1;
            }],
        execute: function() {
            describe('InitCapsPipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new init_caps_pipe_1.InitCapsPipe();
                });
                it('transforms "abc" to "Abc"', function () {
                    expect(pipe.transform('abc')).toEqual('Abc');
                });
                it('transforms "abc def" to "Abc Def"', function () {
                    expect(pipe.transform('abc def')).toEqual('Abc Def');
                });
                it('leaves "Abc Def" unchanged', function () {
                    expect(pipe.transform('Abc Def')).toEqual('Abc Def');
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbml0LWNhcHMtcGlwZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1lBRUEsUUFBUSxDQUFDLGNBQWMsRUFBRTtnQkFDckIsSUFBSSxJQUFrQixDQUFDO2dCQUN2QixVQUFVLENBQUM7b0JBQ1AsSUFBSSxHQUFHLElBQUksNkJBQVksRUFBRSxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsbUNBQW1DLEVBQUU7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9pbml0LWNhcHMtcGlwZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbml0Q2Fwc1BpcGV9IGZyb20gJy4vaW5pdC1jYXBzLXBpcGUnO1xyXG5cclxuZGVzY3JpYmUoJ0luaXRDYXBzUGlwZScsICgpID0+IHtcclxuICAgIGxldCBwaXBlOiBJbml0Q2Fwc1BpcGU7XHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICBwaXBlID0gbmV3IEluaXRDYXBzUGlwZSgpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgndHJhbnNmb3JtcyBcImFiY1wiIHRvIFwiQWJjXCInLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwZWN0KHBpcGUudHJhbnNmb3JtKCdhYmMnKSkudG9FcXVhbCgnQWJjJyk7XHJcbiAgICB9KTtcclxuICAgIGl0KCd0cmFuc2Zvcm1zIFwiYWJjIGRlZlwiIHRvIFwiQWJjIERlZlwiJywgKCkgPT4ge1xyXG4gICAgICAgIGV4cGVjdChwaXBlLnRyYW5zZm9ybSgnYWJjIGRlZicpKS50b0VxdWFsKCdBYmMgRGVmJyk7XHJcbiAgICB9KTtcclxuICAgIGl0KCdsZWF2ZXMgXCJBYmMgRGVmXCIgdW5jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgIGV4cGVjdChwaXBlLnRyYW5zZm9ybSgnQWJjIERlZicpKS50b0VxdWFsKCdBYmMgRGVmJyk7XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
