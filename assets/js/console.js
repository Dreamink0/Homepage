if (window.console) {
  Function.prototype.makeMulti = function () {
    let l = new String(this);
    l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
    return l;
  };
  let string = function () {
    /*
 _______                                               __            __                 
|       \                                             |  \          |  \                
| $$$$$$$\  ______    ______    ______   ______ ____   \$$ _______  | $$   __   ______  
| $$  | $$ /      \  /      \  |      \ |      \    \ |  \|       \ | $$  /  \ /      \ 
| $$  | $$|  $$$$$$\|  $$$$$$\  \$$$$$$\| $$$$$$\$$$$\| $$| $$$$$$$\| $$_/  $$|  $$$$$$\
| $$  | $$| $$   \$$| $$    $$ /      $$| $$ | $$ | $$| $$| $$  | $$| $$   $$ | $$  | $$
| $$__/ $$| $$      | $$$$$$$$|  $$$$$$$| $$ | $$ | $$| $$| $$  | $$| $$$$$$\ | $$__/ $$
| $$    $$| $$       \$$     \ \$$    $$| $$ | $$ | $$| $$| $$  | $$| $$  \$$\ \$$    $$
 \$$$$$$$  \$$        \$$$$$$$  \$$$$$$$ \$$  \$$  \$$ \$$ \$$   \$$ \$$   \$$  \$$$$$$ 
                                                                                        
                                                                                        
                                                                                        
    */
  };
  console.log(string.makeMulti());
}