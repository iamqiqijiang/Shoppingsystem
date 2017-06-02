window.onload= function() {
        var box  = document.getElementById("all");  //   ��ô����
        var ul = box.children[0].children[0];  // ��ȡul
        var ulLis = ul.children;  //  ul ���������  li
        // ��ϰ��  cloneNode()     ��¡�ڵ�       ׷��a.appendChild(b)  ��b �ŵ�a �������
        //1.  ulLis[0].cloneNode(true)  ��¡  �ڵ�
        ul.appendChild(ulLis[0].cloneNode(true));   // ul �� a   ulLis[0].cloneNode(true) ��b

        //2. ���� ol �����li
        var ol = box.children[1];  // ���ol
        // ��Ϊ ����Ҫ�����ܶ�� ol �����li ������Ҫ�õ�for ѭ��Ŷ
        for(var i=0;i<ulLis.length-1;i++) {   // ul �����li  ���� Ҫ��ȥ 1  ��Ϊ���ǿ�¡һ��
            // �����ڵ� li
            var li = document.createElement("li");
            li.innerHTML = i + 1;   //  ���ڼ�1 �Ĺ�ϵ
            // a.appendChild(b);
            ol.appendChild(li);
        }
        var olLis = ol.children;  // �ҵ� ol �����li
        olLis[0].className = 'current';
        // 3. ��������  ����Сli ol
        for(var i=0;i<olLis.length;i++) {
            olLis[i].index = i;  // ����������
            olLis[i].onmouseover = function() {
                // ���������
                for(var j=0;j<olLis.length;j++) {
                    olLis[j].className = "";
                }
                this.className = 'current';
                animate(ul,-this.index*ulLis[0].offsetWidth);
                key = square = this.index; // ��꾭�� key square Ҫ���� ��ǰ��������
            }
        }
       // 4. ��ʱ������  �ѵ�
        var timer = null;  // ��ʱ��
        var key = 0; // ��������ͼƬ�Ĳ��ŵ�
        var square = 0;  // ��������С�����
        timer = setInterval(autoplay,3000);   // ÿ��3s ����һ�� autoplay
        function autoplay() {
            key++;   // key == 1  �� ++
            console.log(key); //  ���ܳ���5
            if(key > ulLis.length - 1)
            {
               // alert('ͣ��');
                ul.style.left = 0;
                key = 1;  // ��Ϊ��6�ž��ǵ�һ�ţ������Ѿ���������ˣ� ��һ�β��ŵ�2��
                // ��2�ŵ���������1
            }
            animate(ul,-key*ulLis[0].offsetWidth);
            // С���������
            square++;  // С�����Լ�1
            square = square>olLis.length-1 ? 0 : square;
            /// ���������
            for(var i=0;i<olLis.length;i++) {
                olLis[i].className = "";
            }
            olLis[square].className = "current";   // ���µ�ǰ�Լ���

        }


        // ��꾭����ֹͣ��ʱ��
        box.onmouseover = function() {
            clearInterval(timer);
        }

        box.onmouseout = function() {
            timer = setInterval(autoplay,3000);  // һ����ô��
        }



        //  ������װ
        function animate(obj,target) {
            clearInterval(obj.timer);  // Ҫ������ʱ�����������ǰ��ʱ��
            // ��2������ ��һ�� ����˭������  �ڶ� ���� ������
            // ��� offsetLeft ������  target Ŀ��λ�þ�Ӧ�÷�����
            var speed = obj.offsetLeft < target ? 15 : -15;
            obj.timer = setInterval(function() {
                var result = target - obj.offsetLeft;  //  ���ǵ�ֵ ���� 0 ˵����ȫ���
                // ������ԭ��
                obj.style.left = obj.offsetLeft + speed  + "px";
                if(Math.abs(result) <= 15) {
                    obj.style.left = target + "px";   //��������
                    clearInterval(obj.timer);
                }
            },10);
        }

    }