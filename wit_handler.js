function responseFromWit(data) {
  console.log("data from wit:");
  console.log(JSON.stringify(data));
  const intent = data.intents.length > 0 && data.intents[0] || "__foo__";
 
  //counter for number of questions
  const questions = ['لم','متى','ماهو','ماهي','ماذا','كم','وكم','وبكم','بكم','شلون','كيف','لماذا','هل','وكيف','وماذا','ولماذا','ومتى','وهل','ومن','وشلون','وماهي','وماهو','وش'];
  var question_counter = 0;
  const splt_txt = data.text.split(" ");
  
  for (var i = 0; i < splt_txt.length; i++){
    for (var j = 0; j<questions.length; j++){
    if (splt_txt[i] == questions[j]){
      question_counter +=1;
    }
    }
  }
  if (question_counter >1){
   return Promise.resolve('من فضلك ادخل سؤال واحد');}
  
   else{
     
  switch (intent.name) {
             
  
    case "greeting":
      if(intent.confidence>0.7){
      if(data.entities["Salam:Salam"] != null) 
      {if (data.entities["Salam:Salam"][0].name == 'Salam') 
      {return Promise.resolve( "وعليكم السلام");}}
      
      if(data.entities["Hala:Hala"] != null) {
      if(data.entities["Hala:Hala"][0].name == 'Hala') {
            return Promise.resolve( "اهلا وسهلا");
      }}
      if(data.entities["good_evening:good_evening"] != null) {
      if(data.entities["good_evening:good_evening"][0].name == 'good_evening') {
      return Promise.resolve("مساء النور")
      }}
      if(data.entities["good_morning:good_morning"] != null) {
      if(data.entities["good_morning:good_morning"][0].name == 'good_morning')  {
       return Promise.resolve("صباح النور") 
      }}
       if(data.entities["thanks:thanks"] != null) {
      if(data.entities["thanks:thanks"][0].name == 'thanks')  { 
        return Promise.resolve("العفو")
      }}
        return Promise.resolve("مرحبا") 
      } else {return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى')}
      
      
    case "t3aruf":
      if(intent.confidence>0.7){
      if(data.entities["name:name"] != null) {
      if(data.entities["name:name"][0].name == 'name')  {   
    return Promise.resolve( "أنا فريدة، مساعدتك الافتراضية "); 
      }}
      if(data.entities["country:country"] != null) {
      if(data.entities["country:country"][0].name == 'country')  {    
        return Promise.resolve("أنا من المملكة العربية السعودية" );
      }}
      if(data.entities["age:age"] != null) {
      if(data.entities["age:age"][0].name == 'age'){    
      return Promise.resolve("25");
      }}
      if(data.entities["how-r-u:how-r-u"] != null) {
      if(data.entities["how-r-u:how-r-u"][0].name == 'how-r-u')  {   
        return Promise.resolve("بخير الحمدلله");
      }}
        if(data.entities[''] == null){
          return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى');
        }
      
        
      } else {return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى')}
  
      
      
      
   case "ip":
          if(intent.confidence>0.7){
           if(data.entities["ip1:ip1"] != null){
        if (data.entities["ip1:ip1"][0].name == 'ip1'){ 
          return Promise.resolve("تعني الملكية أن ﻟﻠﻣﺎﻟك اﻟﺣرﻳﺔ اﻟﻣطﻠﻘﺔ ﻓﻲ اﺳﺗﻌﻣﺎﻝ ﻣﻠﻛﻳﺗﻪ أو ﻓﻲ ﻣﻧﻊ اﻵﺧرﻳن ﻣن اﺳﺗﻌﻣﺎﻟﻬﺎ وذﻟك ﻓﻲ ﻧطﺎق ﻣﺎ ﻳﺳﻣﺢ ﺑﻪ اﻟﻘﺎﻧون. وﻳﻘﺗﺻر اﺳﺗﻌﻣﺎﻝ ﻣﺻطﻠﺢ اﻟﻣﻠﻛﻳﺔ اﻟﻔﻛرﻳﺔ ﻓﻲ أﻳﺎﻣﻧﺎ اﻟﺣﺎﺿرة ﻋﻠﻰ أﻧواع اﻟﻣﻠﻛﻳﺔ اﻟﺗﻲ ﻳﺑدﻋﻬﺎ اﻟﻔﻛر اﻹﻧﺳﺎﻧﻲ.")
        }}
         if(data.entities["ip2:ip2"] != null){
        if (data.entities["ip2:ip2"][0].name == 'ip2'){    
         return Promise.resolve("ﺑﺣﺳب اﻟﻔﻘرة اﻟﺛﺎﻣﻧﺔ ﻣن اﻟﻣﺎدة اﻟﺛﺎﻧﻳﺔ ﻣن اﺗﻔﺎﻗﻳﺔ إﻧﺷﺎء اﻟﻣﻧظﻣﺔ اﻟﻌﺎﻟﻣﻳﺔ ﻟﻠﻣﻠﻛﻳﺔ اﻟﻔﻛرﻳﺔ فتشمل هذه الحقوق ﻣﺎ ﻳﻠﻲ: - اﻟﻣﺻﻧﻔﺎت اﻷدﺑﻳﺔ واﻟﻔﻧﻳﺔ واﻟﻌﻠﻣﻳﺔ. - إﻧﺟﺎزت اﻟﻔﻧﺎﻧﻳن اﻟﻘﺎﺋﻣﻳن ﺑﺎﻷداء واﻟﻔوﻧوﻏراﻣﺎت واﻟﺗﻠﻔزﻳون. - اﻻﺧﺗراﻋﺎت ﻓﻲ ﺟﻣﻳﻊ ﻣﺟﺎﻻت اﻻﺟﺗﻬﺎد الإنساني. - الاكتشافات اﻟﻌﻠﻣﻳﺔ. - اﻟﺗﺻﺎﻣﻳم اﻟﺻﻧﺎﻋﻳﺔ. - العلامات اﻟﺗﺟﺎرﻳﺔ وعلامات الخدمة والأسماء والسمات التجارية. - الحماية من المنافسة غير المشروعة. وجميع الحقوق الأخرى الناتجة عن النشاط الفكري في المجالات الصناعية والعلمية والأدبية والفنية.")   
        }}
         if(data.entities["ip3:ip3_1"] != null){
        if (data.entities["ip3:ip3_1"][0].name == 'ip3'){    
        return Promise.resolve("العلامات التجارية.")
        }}
         if(data.entities["ip3:ip3_2"] != null){
        if (data.entities["ip3:ip3_2"][0].name == 'ip3'){    
        return Promise.resolve("الحقوق المجاورة لحق المؤلف.")
        }}
        if(data.entities["ip3:ip3_3"] != null){
        if (data.entities["ip3:ip3_3"][0].name == 'ip3'){    
          return Promise.resolve("براءات الاختراع")
        }}
        if(data.entities["ip3:ip3_4"] != null){
        if (data.entities["ip3:ip3_4"][0].name == 'ip3'){  
          return Promise.resolve("التصاميم الصناعية")
        }}
        if(data.entities["ip3:ip3_5"] != null){
        if (data.entities["ip3:ip3_5"][0].name == 'ip3'){     
        return Promise.resolve("المنافسة غير المشروعة.")
        }}
         if(data.entities["ip4:ip4"] != null){
        if (data.entities["ip4:ip4"][0].name == 'ip4'){    
          return Promise.resolve("السبب الأول للاهتمام بحماية الملكية الفكرية هو الرغبة في تأمين العدالة التي تسمح لأي شخص بذل جهدًا ووقتا في ابتكار عمل ما بأن ينتفع ماديًا من عمله هذا. والسبب الثاني هو أن الحماية الممنوحة للملكية الفكرية تشجع المبدعين كثيرًا على القيام بمزيد من الابتكارات، نظرًا للمردود المادي لأعمالهم هذه فتنمو بذلك وتزدهر الصناعات والشركات القائمة على تلك الابتكارات."     )
        }}
        if(data.entities["ip3:ip3_6"] != null){
        if (data.entities["ip3:ip3_6"][0].name == 'ip3'){    
          return Promise.resolve("حماية هذا النوع من الملكية ترعاه قوانين حق المؤلف.")
        }}
        if(data.entities["ip3:ip3_7"] != null){
        if (data.entities["ip3:ip3_7"][0].name == 'ip3'){  
          return Promise.resolve("حماية هذا النوع من الملكية ترعاه قوانين حق المؤلف." )
        }}
         if(data.entities["ip3:ip3_8"] != null){
        if (data.entities["ip3:ip3_8"][0].name == 'ip3'){   
          return Promise.resolve("حماية هذا النوع من الملكية ترعاه قوانين الحقوق المجاورة لحق المؤلف")
        }}
         if(data.entities["ip3:ip3_9"] != null){
        if (data.entities["ip3:ip3_9"][0].name == 'ip3'){      
        return Promise.resolve("حماية هذا النوع من الملكية ترعاه قوانين الحقوق المجاورة لحق المؤلف")
        }}
      if(data.entities["ip3:ip3_10"] != null){
        if (data.entities["ip3:ip3_10"][0].name == 'ip3'){ 
         return Promise.resolve("حماية الاختراعات تتم بواسطة قوانين البراءات")
        }}
       if(data.entities["ip3:ip3_11"] != null){
        if (data.entities["ip3:ip3_11"][0].name == 'ip3'){   
          return Promise.resolve("حماية التصاميم الصناعية تتم بواسطة التشريعات الخاصة بها أو من خلال قوانين الملكية الصناعية أو من خلال قانون حق المؤلف"    )
        }}
       if(data.entities["ip5:ip5_regulation"] != null){
        if (data.entities["ip5:ip5_regulation"][0].name == 'ip5'){       
          return Promise.resolve("تشجيع الإبداع الفكري من خلال توفير الحماية له؛ الاعتراف الرسمي بالمبدعين؛ خلق بنوك للمعلومات تتضمن معلومات حيوية؛ تسهيل نمو الصناعة والثقافة المحلية والتجارة الدولية من خلال المعاهدات التي تقدم الحماية المتعددة الأطراف"    )
        }}
         if(data.entities["ip6:ip6_resources"] != null){
        if (data.entities["ip6:ip6_resources"][0].name == 'ip6'){     
          return Promise.resolve("للتعمق في هذا الموضوع وللمزيد من المراجع يمكن زيارة الموقعين التالين https://www.wipo.int/about-ip/en والموقع http://www.wipo.int/ar/treaties/index.html "    )
        }}
        if(data.entities["ip7:ip7_trespass"] != null){
        if (data.entities["ip7:ip7_trespass"][0].name == 'ip7'){ 
          return Promise.resolve("في حال اكتشفت أنه تم التعدي على حقوق الملكية الفكرية الخاصة بك، ننصحك باللجوء إلى محامي أو مؤسسة مختصة بإنفاذ الحقوق في بلدك" )
        }}
        if(data.entities["idea:idea"] != null){
        if (data.entities["idea:idea"][0].name == 'idea'){   
          return Promise.resolve("الأفكار المجردة مستثناة من الحماية بموجب النظام، وعنذ تطبيقها يحمى التعبير عنها وليست الفكرة نفسها. ويمكنك الاطلاع على النظام واللائحة التنفيذية على الرابط التالي: https://www.saip.gov.sa/ar/laws-regulations/")
        }}
         if(data.entities["ip_authority:authority"] != null){
        if (data.entities["ip_authority:authority"][0].name == 'ip_authority'){    
        return Promise.resolve(" الهيئة تهدف إلى تنظيم مجالات الملكية الفكرية في المملكة، ودعمها، وتنميتها، ورعايتها، وحمايتها، وانفاذها، والارتقاء بها وفق أفضل الممارسات العالمية وهي أحد مبادرات رؤية المملكة ٢٠٣٠ حيث صدرت موافقة مجلس الوزراء بنقل اختصاص براءات الاختراع والعلامات التجارية وحقوق المؤلف للهيئة")
        }}
         if(data.entities["ip_tweet:tweet"] != null){
        if (data.entities["ip_tweet:tweet"][0].name == 'ip_tweet'){    
        return Promise.resolve(" التغريدات الإبداعية محميه لأصحابها، ويستثنى الكلام العام أو الرأي العام وماشابهه")
        }}
         if(data.entities["ip_fields:fields"] != null){
        if (data.entities["ip_fields:fields"][0].name == 'ip_fields'){     
        return Promise.resolve("العلامات التجارية، حقوق المؤلف، براءات الاختراع، النماذج الصناعية، الأصناف النباتية، وغيرها من المجالات...  وكل هذه التفاصيل موجودة في موقعنا حياك https://t.co/auFD913Kxd   :مجالات حقوق الملكية الفكرية تشمل")
        }}
         if(data.entities["ip_registration:registration"] != null){
        if (data.entities["ip_registration:registration"][0].name == 'ip_registration'){ 
          return Promise.resolve("يمكنك التسجيل لـ:\n 1 - البراءات (التصاميم المعمارية، النماذج الصناعية، الأصناف النباتية، التطبيقات الإلكترونية، تصاميم الدارات المتكاملة) عن طريق الرابط: epatentsso.saip.gov.sa \n2 - الاعمال المحمية بنظام حقوق المؤلف والحقوق المجاورة عن طريق الرابط: copyright.saip.gov.sa  \n3 - العلامات التجارية عن طريق الرابط: tm.saip.gov.sa \n4 - ترخيص ممارسة أنشطة الملكية الفكرية عن طريق الرابط: agent.saip.gov.sa ")
        }}
          if(data.entities["ip_geographicLoc:geographicLoc"] != null){
        if (data.entities["ip_geographicLoc:geographicLoc"][0].name == 'ip_geographicLoc'){    
          return Promise.resolve(" النطاق الجغرافي للحماية يختلف حسب مجالات الملكية الفكرية، على سبيل المثال لا يوجد شهادة دولية تحمي براءة الاختراع بجميع دول العالم، اما حق المؤلف فهو محمي تلقائياً بجميع دول العالم، والعلامة التجارية تحمى بالدولة المسجل بها وبالفئة المختارة")
        }}
         if(data.entities["ip_geneticresources_geneticresources1"] != null){
        if (data.entities["ip_geneticresources_geneticresources1"][0].name == 'ip_geneticresources'){     
        return Promise.resolve("الموارد الوراثية ذات القيمة الفعلية أو المحتملة، بما فيها عناصر التنوع البيولوجي في وضعها الطبيعي، والأصناف والسلالات الحديثة أو التقليدية المستخدمة في الزراعة، والأصول الوراثية الخاصة")
        }}
          if(data.entities["ip_geneticresources_geneticresources2"] != null){
        if (data.entities["ip_geneticresources_geneticresources2"][0].name == 'ip_geneticresources'){ 
        return Promise.resolve("يمكن أن تساهم الموارد الوراثية مساهمة مهمة في البحث والتطوير الابتكار منتجات جديدة، وذلك في عدد متزايد من القطاعات التكنولوجية والصناعية. ومن المسائل البالغة الأهمية في هذا الصدد، شروط النفاذ إلى الموارد الوراثية، والتزام موفري الموارد الوراثية بمبدأ الموافقة المسبقة والمستنيرة، وما يترتب على ذلك من تدابير لاقتسام المنافع التي يثرها استخدام الموارد الوراثية وتنميتها")
        }}
         if(data.entities["ip_geneticresources_geneticresources3"] != null){
        if (data.entities["ip_geneticresources_geneticresources3"][0].name == 'ip_geneticresources'){ 
        return Promise.resolve("أتاحت القوانين الدولية وعدد من القوانين واللوائح الإقليمية والوطنية ودون الوطنية، وضع إطار التطبيق مبدأ الموافقة المسبقة والمستنيرة للنفاذ إلى الموارد الوراثية، وتحديد شروط هذا النفاذ، لا سيما ضمان استخدام هذه الموارد استخدامة مستدامة واقتسام منافعه بإنصاف. وتشمل العناصر الرئيسية من القانون الدولي، اتفاقية التنوع البيولوجي والمعاهدة الدولية بشأن الموارد الوراثية النباتية للأغذية والزراعة التابعة لمنظمة الأغذية والزراعة. وفي إطار الاتفاقات المبرمة بشأن النفاذ إلى الموارد الوراثية واقتسام المنافع والنظم القانونية التي تتيح هذا النفاذ، تكتسي التدابير الخاصة المتصلة بإدارة الملكية الفكرية أهمية بالغة لأنها تضمن مراعاة هذه الاتفاقات لضرورة أن يعود النفاذ إلى الموارد الوراثية بمنافع محددة، وتكفل الاقتسام المنصف لهذه المنافع والاحترام التام لمصالح ومشاغل موفري هذه الموارد")
        }}
        if(data.entities["ip_traditionknowledge_traditionknowledge"] != null){
        if (data.entities["ip_traditionknowledge_traditionknowledge"][0].name == 'ip_traditionknowledge'){     
          return Promise.resolve("يسعى العديد من أصحاب المعارف التقليدية إلى إدراج المعارف التقليدية وأشكال التعبير الثقافي في إطار من التنمية الاقتصادية والاجتماعية المستدامة، من خلال اللجوء إلى مختلف نهج الملكية الفكرية، بما في ذلك قوانين البراءات والعلامات التجارية وحق المؤلف. ويستعين أصحاب المعارف التقليدية كذلك بما يسمى بالقوانين الخاصة أو المصاغة خصيصا لحماية المعارف التقليدية، أو أشكال التعبير التقليدي الثقافي، أو الفلكلور، حيث وجدت")
        }}
        if(data.entities["ip_enforcement_enforcement"] != null){
        if (data.entities["ip_enforcement_enforcement"][0].name == 'ip_enforcement'){    
          return Promise.resolve(" ينص اتفاق تريبس ومعه القوانين الوطنية على مجموعة من آليات الإنفاذ الفعالة وهي: - التدابير المؤقتة، كالبحث ومصادرة السلع التي يشتبه في أنها متعدية والمعدات المستخدمة في صنع هذه السلع - الإجراءات المدنية كدفع التعويضات المالية وإتلاف السلع المتعدية - الأوامر القضائية لكف التعدي الحاصل أو لتفادي حصوله - الإجراءات الجنائية كالحبس والغرامة  - التدابير الحدودية لوقف الإفراج عن السلع المستوردة التي يظن أنها منتحلة ومنع تداولها")
        }}
            if(data.entities[''] == null){
          return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى');
        }
        }
      else { return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى')}
      
            
   case "Trademarks":
      if(intent.confidence>0.7){
        if(data.entities["t_1:t_1"] != null){
        if (data.entities["t_1:t_1"][0].name == 't_1'){
          return Promise.resolve("يجب أخذ الموافقة الخطية من صاحب العلامة التجارية" );
        }}
        
        if(data.entities["t_2:t_2"] != null){
        if (data.entities["t_2:t_2"][0].name == 't_2'){
          return Promise.resolve(" على الرابط التالي: يتم تقديم التظلم عبر نظام العلامات التجارية https://t.co/auFD913Kxd");
        }}
        if(data.entities["t_3:t_3"] != null){
        if (data.entities["t_3:t_3"][0].name == 't_3'){
          return Promise.resolve("التظلم من قرار رفض تسجيل علامة او تعليقة على شرط يتم برسوم ١٠٠٠ ريال، ويمكن الاطلاع على الرسوم المختلفة عبر النظام و'اللائحة التنفيذية لنظام العلامات التجارية' عبر الرابط التالي: https://t.co/nOy7lvjaxW ");
        }}
        if(data.entities["t_4:t_4"] != null){
        if (data.entities["t_4:t_4"][0].name == 't_4'){
          return Promise.resolve("تحت الإجراءات يكون الطلب في فترةالنشر 60 يوم، ويجب الانتظار حتى نهاية الفترة");
        }}
        
        if(data.entities["t_5:t_5"] != null){
        if (data.entities["t_5:t_5"][0].name == 't_5'){
          return Promise.resolve("يمكنكم الدخول على نظام العلامات التجارية و معرفة رقم الفاتورة بالضغط على رقم الطلب او برمز فواتير النشر 144 (خدمات أعمالي) ، ومن ثم السداد على الرقم المفوتر 242");
        }}
        if(data.entities["t_7:t_7"] != null){
        if (data.entities["t_7:t_7"][0].name == 't_7'){
          return Promise.resolve("يمكن تسجيل علامات تجارية متعددة تحت سجل مؤسسة تجارية واحدة");
        }}
        if(data.entities["t_9:t_9"] != null){
        if (data.entities["t_9:t_9"][0].name == 't_9'){
          return Promise.resolve("لايحق المطالبة بتغيير الاسم التجاري وفي حال كانت العلامة قيد التسجيل يمكن الأعتراض عليها، وفي حال كانت مسجلة بالإمكان التوجه بموجب النظام الى المحاكم المختصة");
        }}
        if(data.entities["t_10:t_10"] != null){
        if (data.entities["t_10:t_10"][0].name == 't_10'){
          return Promise.resolve("المتوفر حالياً باللغة العربية فقط، يمكنكم الترجمة من مكتب ترجمة معتمد");
        }}
        if(data.entities["t_11:t_11"] != null){
        if (data.entities["t_11:t_11"][0].name == 't_11'){
          return Promise.resolve("لا يجوز تسجيل العلامة التي تحمل أسماء مدن او دول او بيانات جغرافية، حيث انه لايمكن حمايتها");
        }}
        if(data.entities["t_14:t_14"] != null){
        if (data.entities["t_14:t_14"][0].name == 't_14'){
          return Promise.resolve("يجب أن يكون تسجيل العلامة التجارية على السجل التجاري ليتم ممارسة النشاط التجاري لها");
        }}
        if(data.entities["t_15:t_15"] != null){
        if (data.entities["t_15:t_15"][0].name == 't_15'){
          return Promise.resolve("يمكنكم تقديم طلب تعديل بيانات من خلال النظام لصورة العلامة بحيث أن لا يكون التغيير جوهري");
        }}
        if(data.entities["t_16:t_16"] != null){
        if (data.entities["t_16:t_16"][0].name == 't_16'){
          return Promise.resolve("لا يوجد مكتب محدد يمكنكم اختيار اي مكتب ترجمة معتمد");
        }}
        if(data.entities["t_17:t_17"] != null){
        if (data.entities["t_17:t_17"][0].name == 't_17'){
          return Promise.resolve("يتم إصدار الفاتورة خلال أقل من ٢٤ ساعة بالموقع الإلكتروني");
        }}
        if(data.entities["t_18:t_18"] != null){
        if (data.entities["t_18:t_18"][0].name == 't_18'){
          return Promise.resolve("يمكن تقديم طلب نقل ملكية للعلامة التجارية التابعة للمؤسسة عبر النظام الإلكتروني");
        }}
        if(data.entities["t_19:t_19"] != null){
        if (data.entities["t_19:t_19"][0].name == 't_19'){
          return Promise.resolve("تُنشر العلامات التجارية في صحيفة الملكية الفكرية و يمكنكم الاطلاع عليها من خلال الرابط :https://ipn.saip.gov.sa");
        }}
        if(data.entities["t_20:t_20"] != null){
        if (data.entities["t_20:t_20"][0].name == 't_20'){
          return Promise.resolve("لا يتم استخدام العلامة التجارية إلا بعد انتهاء فترة النشر و الحصول على الشهادة");
        }}
        if(data.entities["t_21:t_21"] != null){
        if (data.entities["t_21:t_21"][0].name == 't_21'){
          return Promise.resolve("تسجيل العلامة التجارية لا يتطلب سجل تجاري حيث بالإمكان تقديم الطلب بإسم شخصي");
        }}
        if(data.entities["t_22:t_22"] != null){
        if (data.entities["t_22:t_22"][0].name == 't_22'){
          return Promise.resolve("عقد التنازل من مالك العلامة، يحتوي على (اسم العلامة,رقمها,تاريخها, فئتها) على مطبوعاته ومصدق من الغرفة التجارية. ولا توجد صيغة موحدة للتنازل");
        }}
        if(data.entities["t_23:t_23"] != null){
        if (data.entities["t_23:t_23"][0].name == 't_23'){
          return Promise.resolve("يكتب االعقد بالطريقة التي تناسب جميع الأطراف");
        }}
        if(data.entities["t_24:t_24"] != null){
        if (data.entities["t_24:t_24"][0].name == 't_24'){
          return Promise.resolve("التقديم يكون باللغة العربية أو اللغة الإنجليزية فقط");
        }}
        if(data.entities["t_25:t_25"] != null){
        if (data.entities["t_25:t_25"][0].name == 't_25'){
          return Promise.resolve("التسجيل غير إلزامي");
        }}
        if(data.entities["t_26:t_26"] != null){
        if (data.entities["t_26:t_26"][0].name == 't_26'){
          return Promise.resolve("يمكنكم الاطلاع على النظام و اللائحة التنفيذية لنظام العلامات التجارية على الرابط التالي : https://t.co/6z0nBgA7hv");
        }}
        if(data.entities["t_27:t_27"] != null){
        if (data.entities["t_27:t_27"][0].name == 't_27'){
          return Promise.resolve("عنداختلاف نشاط العلامات التجارية يمكن التسجيل باسماء مشابهه او مطابقة ، و يمكنكم الاطلاع النظام و اللائحة التنفيذية على الرابط التالي: https://t.co/SjhmMrhCwI");
        }}
        if(data.entities["t_28:t_28"] != null){
        if (data.entities["t_28:t_28"][0].name == 't_28'){
          return Promise.resolve("كل علامة تجارية لها رسوم خاصة بها");
        }}
        if(data.entities["t_29:t_29"] != null){
        if (data.entities["t_29:t_29"][0].name == 't_29'){
          return Promise.resolve("الفرق الأساسي بين التصميم الصناعي والعلامة التجارية هو أن التصميم الصناعي يجب أن يتحقق فيه أولاً الجانب الزخرفي دون جانب التمييز بالضرورة الذي هو شرط أساسي لحماية العلامات التجارية. أما العلامة التجارية، وبالرغم من أنها تتكون من مختلف أنواع الرموز الظاهرة، الزخرفية منها أو غير الزخرفية، فيجب أن تكون دائمًا مميزة، أي بعبارة أخرى يجب أن تكون دائمًا قادرة على تمييز سلع شركة أو خدماتها عن سلع غيرها من الشركات وخدماتها. ومن هنا فإن وظائف ومسوغات حماية التصاميم الصناعية تختلف عن وظائف ومسوغات حماية العلامات التجارية");
        }}
  
        if(data.entities["t_32:t_32"] != null){
        if (data.entities["t_32:t_32"][0].name == 't_32'){
          return Promise.resolve("في الكثير من الأحيان، تعتبر العلامة التجارية خادعة إذا كانت تضلل الزبائن بإيحائها أن البضائع موضوع الحماية تتميز بصفات نوعية تكون غير موجودة فعليًا. وخير مثال على ذلك، استعمال عبارة 'جلد حقيقي' كعلامة تجارية لبضائع غير مصنوعة من الجلد");
        }}
        if(data.entities["t_36:t_36"] != null){
        if (data.entities["t_36:t_36"][0].name == 't_36'){
          return Promise.resolve("حماية العلامات التجارية تكون أساسًا من خلال القوانين الوطنية أو الإقليمية يشترط في غالب الأحيان تسجيل العلامة قبل حصولها على الحماية ولكن في بعض الحالات تتم حماية العلامة بعد استخدامها لمدة طويلة");
        }}
        if(data.entities["t_37:t_37"] != null){
        if (data.entities["t_37:t_37"][0].name == 't_37'){
          return Promise.resolve("يجب تسجيل العلامة في كل بلد على حدة");
        }}
        if(data.entities["t_38:t_38"] != null){
        if (data.entities["t_38:t_38"][0].name == 't_38'){
          return Promise.resolve("يرتكز مفھوم حماية العلامات التجارية، سواءً كانت مسجلة أم لا على الأساسين التاليين:الأول وھو أن العلامة التجارية توفر لرجال الأعمال وسيلة فعالة لمنع أعمال المنافسة التي تتم من خلال خلق الالتباس في ذھن المستھلكين إذ تجعلھم يعتقدون أنھم يشترون سلعاً وخدمات معروفة في حين انهم يشترون سلعاً وخدمات مقلدة وأقل جودة. وتقود أعمال التقليد هذه إلى زعزعة ثقة المستهلك بمنتجات صاحب العلامة وتلحقق ضرراً كبيراً بسمعته في السوق");
        }}
        if(data.entities["t_40:t_40"] != null){
        if (data.entities["t_40:t_40"][0].name == 't_40'){
          return Promise.resolve("يمكن أن تستعمل هذه الإشارة كعلامة تجارية، ولذا فإن حمايتها بواسطة العلامات التجارية هي أكثر الطرق احتمالا");
        }}
        if(data.entities["t_43:t_43"] != null){
        if (data.entities["t_43:t_43"][0].name == 't_43'){
          return Promise.resolve("من أهم وظائف العلامة التجارية:"+"\n"+ "1/ ﻤﺴﺎﻋدة المستهلك ﻓﻲ ﺘﺤدﻴد وﺘﻤﻴﻴز السلع والخدمات" +"\n"+"2/ ﺘﺴﻤﺢ لشركات ﺒﺘﻤﻴﻴز ﻤﻨﺘﺠﺎﺘﻬﺎ"+"\n"+"3/ ﺘﻌﺘﺒرأداة ﺘﺴوﻴق واﻷﺴﺎس لتكوين ﺼورة وﺴﻤﻌﺔ للشركة في السوق"+"\n"+"4/ ﻴﻤﻜن ﺘرﺨﻴﺼﻬﺎ للحصول ﻋﻠﻰ دﺨل ﻤﺒﺎﺸر ﻤن ﺨﻼل اﻹﺘﺎوات"+"\n"+"5/ ﻋﻨﺼر أﺴﺎﺴﻲ ﻤن ﻋﻨﺎﺼر اﻷﺼول التجارية لشركة "+"\n"+" 6/ﺘﺸﺠﻊ الشركات ﻋﻠﻰ اﻻﺴﺘﺜﻤﺎر ﻓﻲ الجودة"+"\n"+" 7/ ﻴﻤﻜن أن ﺘﻜون ﻤﻔﻴدة لحصولﻋﻠﻰ ﺘﻤوﻴل .");
        }}
        
        if(data.entities["t1:t1"] != null){
        if (data.entities["t1:t1"][0].name == 't1'){
          return Promise.resolve("يمكنكم تقديم طلب البحث عن العلامة المسجلة عبر الدخول لحسابكم في بوابة العلامات التجارية على الرابط التالي : https://t.co/DX4iOawG0F…");
        }}
        if(data.entities["t2:t2"] != null){
        if (data.entities["t2:t2"][0].name == 't2'){
          return Promise.resolve("نفيدكم بأنه إذا لم يتم السداد خلال ٣٠ يوم من تاريخ صدور الفاتورة يعتبر الطلب متنازل عنه. و يمكنكم تقديم طلب تسجيل العلامة التجارية من جديد");
        }}
        if(data.entities["t3:t3"] != null){
        if (data.entities["t3:t3"][0].name == 't3'){
          return Promise.resolve("يمكنكم استخدام العلامة التجارية في حال كانت جميع المنتجات في نفس الفئة");
        }}
        if(data.entities["t5:t5"] != null){//change it
        if (data.entities["t5:t5"][0].name == 't5'){
          return Promise.resolve("يمكنكم الدفع برقم الفاتورة عن طريق رمز المفوتر لسداد رقم 242 و رمز فواتير النشر 144 ( خدمات أعمالي )");
        }}
        if(data.entities["t7:t7"] != null){
        if (data.entities["t7:t7"][0].name == 't7'){
          return Promise.resolve("يجب تقديم طلب نقل ملكية العلامة التجارية قبل شطب السجل، و يمكنكم الإطلاع على تفاصيل الخدمة عبر الرابط التالي: يسعدنا تواصلكم... https://t.co/lraelYy8LK ");
        }}
        if(data.entities["t8:t8"] != null){
        if (data.entities["t8:t8"][0].name == 't8'){
          return Promise.resolve("يمكنكم تقديم طلب تعديل بيانات للعلامة التجارية عبر النظام الإلكتروني");
        }}
        if(data.entities["t9:t9"] != null){
        if (data.entities["t9:t9"][0].name == 't9'){
          return Promise.resolve(" يمكنكم تقديم شكوى تقليد علامة تجارية عبر الرابط التالي: https://t.co/ywbPGMRiEi");
        }}
        if(data.entities["t10:t10"] != null){
        if (data.entities["t10:t10"][0].name == 't10'){
          return Promise.resolve(" العلامة التجارية مدة الحماية لها ١٠ سنوات");
        }}
        if(data.entities["t11:t11"] != null){
        if (data.entities["t11:t11"][0].name == 't11'){
          return Promise.resolve("يمكنكم تقديم طلب تسجيل علامة تجارية جديدة واخيار الفئة المناسبة");
        }}
        if(data.entities["t12:t12"] != null){
        if (data.entities["t12:t12"][0].name == 't12'){
          return Promise.resolve("الحمايه على الفئه التي تم التسجيل عليها  وفي حال رغبتكم في حماية العلامه على فئه اخرى يمكنكم طلب تسجيل علامه تجاريه وسيتم دراسة الطلب");
        }}
        if(data.entities["t13:t13"] != null){
        if (data.entities["t13:t13"][0].name == 't13'){
          return Promise.resolve("نعم يمكنكم التقديم باللغة العربية فقط");
        }}
        if(data.entities["t14:t14"] != null){
        if (data.entities["t14:t14"][0].name == 't14'){
          return Promise.resolve("يمكنكم تقديم طلب نقل ملكية عبر نظام العلامات التجارية على الرابط التالي: https://t.co/nOy7lvjaxW");
        }}
        if(data.entities["t15:t15"] != null){
        if (data.entities["t15:t15"][0].name == 't15'){
          return Promise.resolve("تسجيل العلامة التجارية اختياري");
        }}
        if(data.entities["t16:t16"] != null){
        if (data.entities["t16:t16"][0].name == 't16'){
          return Promise.resolve("يمكنكم تقديم طلب التظلم عبر الموقع الإلكتروني لنظام العلامات التجارية");
        }}
        if(data.entities["t19:t19"] != null){
        if (data.entities["t19:t19"][0].name == 't19'){
          return Promise.resolve("نود إفادتكم بأن التقديم على تسجيل العلامة التجارية يكون عبر مكتب محاماة معتمد للأفراد و الشركات غير السعوديين");
        }}
        if(data.entities["t20:t20"] != null){
        if (data.entities["t20:t20"][0].name == 't20'){
          return Promise.resolve("رسوم تقديم الطلب 1000 ريال وعند قبول الطلب ينشر الكترونيًا بعد دفع رسوم النشر 1575 ريال وعند عدم وجود اعتراض تصدر الفاتورة النهائية وهي 5000 ريال");
        }}
        if(data.entities["t22:t22"] != null){
        if (data.entities["t22:t22"][0].name == 't22'){
          return Promise.resolve(" (نظام العلامات التجارية) يجب التقديم على طلب نقل ملكية للعلامة التجارية من المالك السابق إلى المالك الجديد عبر الموقع الإلكتروني");
        }}
        if(data.entities["t23:t23"] != null){
        if (data.entities["t23:t23"][0].name == 't23'){
          return Promise.resolve("يمكنكم استخدام العلامة في جميع مناطق المملكة");
        }}
        if(data.entities["t24:t24"] != null){
        if (data.entities["t24:t24"][0].name == 't24'){
          return Promise.resolve("كل طلب جديد يُدرس و يتم الرد عليه بشكل رسمي عبر الموقع الإلكتروني لنظام العلامات التجارية");
        }}
        if(data.entities["t25:t25"] != null){
        if (data.entities["t25:t25"][0].name == 't25'){
          return Promise.resolve("يتم دراسة الطلب خلال ١٤ يوم من تاريخ التقديم");
        }}
        if(data.entities["t27:t27"] != null){
        if (data.entities["t27:t27"][0].name == 't27'){
          return Promise.resolve("يمكنكم تجديد العلامة الخاصة بكم عبر نظام العلامات التجارية عبر الرابط التالي : https://t.co/nOy7lvjaxW علماً أنه يجب تحديث بيانات العلامة قبل التجديد");
        }}
        if(data.entities["t29:t29"] != null){
        if (data.entities["t29:t29"][0].name == 't29'){
          return Promise.resolve("يمكنكم اخيار الفئة المناسبة لكم حسب نشاطكم التجاري");
        }}
        if(data.entities["t31:t31"] != null){
        if (data.entities["t31:t31"][0].name == 't31'){
          return Promise.resolve("نعم يمكنكم");
        }}
        if(data.entities["t32:t32"] != null){
        if (data.entities["t32:t32"][0].name == 't32'){
          return Promise.resolve("يمكنكم الدخول على حسابكم بنظام العلامات التجارية و الإطلاع العلامات التجارية عبر الرابط التالي: https://t.co/nOy7lvjaxW");
        }}
        if(data.entities["t33:t33"] != null){
         if (data.entities["t33:t33"][0].name == 't33'){
          return Promise.resolve("يمكنكم التواصل معنا عبر البريد الإلكتروني التالي: saip@saip.gov.sa وسيتم إرسال ملف تصنيف الفئات لكم");
        }}
        if(data.entities["t34:t34"] != null){
        if (data.entities["t34:t34"][0].name == 't34'){
          return Promise.resolve("تمت الموافقة على طلبكم بالحماية للعلامة بمجموعها، تعني لا يمكن أستخدام أحد مكونات العلامة بشكل منفصل");
        }}
        if(data.entities["t35:t35"] != null){
        if (data.entities["t35:t35"][0].name == 't35'){
          return Promise.resolve("استخدام العلامة يكون كما هو موجود بالشهادة");
        }}
        if(data.entities["t37:t37"] != null){
        if (data.entities["t37:t37"][0].name == 't37'){
          return Promise.resolve("شهادة الإيداع خدمة اختيارية، يمكنكم سداد رسومها و تقديمها للجهات الحكومية و الغير حكومية التي تطلب هذة الشهادة أثناء فترة النشر");
        }}
        if(data.entities["t39:t39"] != null){
        if (data.entities["t39:t39"][0].name == 't39'){
          return Promise.resolve("لا يجب عليكم التسجيل مرة أخرى، يمكنكم الدخول على حسابكم بنظام العلامات التجارية و الإطلاع على العلامة مسجلة عبر الرابط التالي: https://t.co/nOy7lvjaxW");
        }}
        if(data.entities["t40:t40"] != null){
        if (data.entities["t40:t40"][0].name == 't40'){
          return Promise.resolve("يجب أن تنطبق شروط تسجيل الأسماء العائلية على الطلب، و يمكنكم التواصل معنا عبر البريد الإلكتروني لمعرفة الشروط: saip@saip.gov.sa");
        }}
        if(data.entities["t44:t44"] != null){
        if (data.entities["t44:t44"][0].name == 't44'){
          return Promise.resolve("العلامات المتشابهه والمطابقة لعلامات مسجله على نفس الفئه لايمكن تسجليها");
        }}
        if(data.entities["t46:t46"] != null){
        if (data.entities["t46:t46"][0].name == 't46'){
          return Promise.resolve("استناداً للمادة ٢٤ من نظام العلامات التجارية يمكنكم تقديم دعوى شطب ");
        }}
        if(data.entities["t47:t47"] != null){
        if (data.entities["t47:t47"][0].name == 't47'){
          return Promise.resolve("مدة الفاتورة ٣٠ يوم من تاريخ الاصدار");
        }}
        if(data.entities["t48:t48"] != null){
        if (data.entities["t48:t48"][0].name == 't48'){
          return Promise.resolve("يمكنكم تقديم طلب تسجيل العلامة التجارية الخاصة بكم عبر الرابط التالي: https://t.co/nOy7lvjaxW");
        }}
        if(data.entities["t50:t50"] != null){
        if (data.entities["t50:t50"][0].name == 't50'){
          return Promise.resolve("يتم سداد رسوم التسجيل النهائي بعد مرحلة النشر ");
        }}
        if(data.entities["t51:t51"] != null){
        if (data.entities["t51:t51"][0].name == 't51'){
          return Promise.resolve("رسوم التجديد تدفع كل 10 سنوات");
        }}
        if(data.entities["t52:t52"] != null){
        if (data.entities["t52:t52"][0].name == 't52'){
          return Promise.resolve("تُنشر العلامات التجارية في صحيفة الملكية الفكرية و يمكنكم الاطلاع عليها من خلال الرابط :https://ipn.saip.gov.sa");
        }}
        if(data.entities["t55:t55"] != null){
        if (data.entities["t55:t55"][0].name == 't55'){
          return Promise.resolve("من متطلبات تسجيل العلامة التجارية إرفاق ترجمة للكلمات أو العناصر الغير عربية من مكتب ترجمة معتمد، و يتم تزويدنا بطريقة نطق الكلمة اذا كانت ليس لها معنى");
        }}
        if(data.entities["t58:t58"] != null){
        if (data.entities["t58:t58"][0].name == 't58'){
          return Promise.resolve("خاصيتان أساسيتان يجب أن تتوافرا في العلامة التجارية هما: أن تكون مميزة وألا تكون خادعة");
        }}
        if(data.entities["t107:t107"] != null){
        if (data.entities["t107:t107"][0].name == 't107'){
          return Promise.resolve("يجب توفير متطلبات الجهات ذات العلاقة");
        }}
        if(data.entities["t67:t67"] != null){
        if (data.entities["t67:t67"][0].name == 't67'){
          return Promise.resolve("نرجو التواصل معنا عبر بوابة مركز التواصل على الرابط التالي : https://t.co/bp3skdE9bZ  أو عبر البريد الإلكتروني التالي: saip@saip.gov.sa");
        }}
        if(data.entities["t163:t163"] != null){
        if (data.entities["t163:t163"][0].name == 't163'){
          return Promise.resolve("لايمكن تعديل الفئه بعد اختيارها ويمكنكم طلب تسجيل جديد على الفئه المناسبه لكم");
        }}
        if(data.entities["t66:t66"] != null){
        if (data.entities["t66:t66"][0].name == 't66'){
          return Promise.resolve("صحيح نطاق الحماية في السعودية و يمكنكم الإطلاع على النظام و اللائحة التنفيذية للعلامات التجارية على الرابط التالي");
        }}
        if(data.entities["t108:t108"] != null){
        if (data.entities["t108:t108"][0].name == 't108'){
          return Promise.resolve("من خلال الدخول على الطلب ثم خيارات ، طلب شهادة الايداع");
        }}
        if(data.entities["t70:t70"] != null){
        if (data.entities["t70:t70"][0].name == 't70'){
          return Promise.resolve(" يمكنكم الاطلاع الانظمة و اللوائح على الرابط التالي : https://t.co/SjhmMrhCwI  ...");
        }}
        if(data.entities["t72:t72"] != null){
        if (data.entities["t72:t72"][0].name == 't72'){
          return Promise.resolve("يمكنكم طلب شهادة الإيداع و تقديمها للجهات الحكومية و الغير حكومية التي تطلب هذة الشهادة أثناء فترة النشر");
        }}
        if(data.entities["t109:t109"] != null){
        if (data.entities["t109:t109"][0].name == 't109'){
          return Promise.resolve(" يمكنكم تقديم طلب تسجيل العلامة الجماعية عبر النظام الإلكتروني على الرابط التالي : https://t.co/nOy7lvjaxW");
        }}
        if(data.entities["t110:t110"] != null){
        if (data.entities["t110:t110"][0].name == 't110'){
          return Promise.resolve(" استعمال العلامة التجارية يكون بعد الحصول على الشهادة، ويمكنكم الإطلاع على المدة النظامية من خلال النظام و اللائحة التنفيذية للعلامات التجارية على الرابط التالي: https://t.co/xNRlaTz2fH…  ");
        }}
        
        if(data.entities["t74:t74"] != null){
        if (data.entities["t74:t74"][0].name == 't74'){
          return Promise.resolve("ابتكار إسم يمكن حجزه كعلامة تجارية اذا تماشى مع الأنظمة واللوائح .. والآلية تكون بتقديم الطلب إلكترونياً");
        }}
        if(data.entities["t75:t75"] != null){
        if (data.entities["t75:t75"][0].name == 't75'){
          return Promise.resolve("نفيدكم بأن القوانين في العلامات التجارية هي المعمول بها النظام الخليجي ولائحته التنفيذية");
        }}
        if(data.entities["t111:t111"] != null){
        if (data.entities["t111:t111"][0].name == 't111'){
          return Promise.resolve("لمعرفة نظام العلامات التجارية يمكنك زيارة صفحة الأنظمة واللوائح من خلال الرابط التالي https://t.co/5FVQNBc5zC");
        }}
        if(data.entities["t112:t112"] != null){
        if (data.entities["t112:t112"][0].name == 't112'){
          return Promise.resolve(" لمزيد من المعلومات يمكنكم زيارة موقعنا صفحة الأنظمة واللوائح  من خلال الرابط التالي: https://t.co/jVq5r6cuth");
        }}
        if(data.entities["t114:t114"] != null){
        if (data.entities["t114:t114"][0].name == 't114'){
          return Promise.resolve("نرجو التواصل معنا عبر بوابة مركز التواصل على الرابط التالي :  https://t.co/bp3skdE9bZ  أو عبر البريد الإلكتروني التالي: saip@saip.gov.sa");
        }}
        if(data.entities["t99:t99"] != null){
        if (data.entities["t99:t99"][0].name == 't99'){
          return Promise.resolve("المتوفر حالياً باللغة العربية، يمكنكم ترجمة الشهادة من مكتب ترجمة معتمد");
        }}
        if(data.entities["t115:t115"] != null){
        if (data.entities["t115:t115"][0].name == 't115'){
          return Promise.resolve("كل طلب جديد يدرس و يتم الرد علية عبر الموقع الرسمي للهيئة");
        }}
        if(data.entities["t189:t189"] != null){
        if (data.entities["t189:t189"][0].name == 't189'){
          return Promise.resolve(" نرجوا رفع طلبكم عبر بوابة مركز التواصل على الرابط التالي : https://t.co/bp3skdE9bZ");
        }}
        if(data.entities["t187:t187"] != null){
        if (data.entities["t187:t187"][0].name == 't187'){
          return Promise.resolve("يتم تقديم طلب نقل ملكية من الاسم الشخصي إلى السجل التجاري للمؤسسة");
        }}
        if(data.entities["t95:t95"] != null){
        if (data.entities["t95:t95"][0].name == 't95'){
          return Promise.resolve(" لتجديد العلامة يمكنكم التواصل معنا على مركز التواصل عبر الرابط التالي : https://t.co/cqiDPLNn0Y ");
        }}
        if(data.entities["t125:t125"] != null){
        if (data.entities["t125:t125"][0].name == 't125'){
          return Promise.resolve(" الرسوم تدفع مرة واحدة فقط و يتم التجديد كل ١٠ سنوات، و يمكنكم الاطلاع على الرسوم من خلال اللائحة التنفيذية لنظام العلامات التجارية على الرابط التالي:  https://t.co/xNRlaTz2fH");
        }}
        if(data.entities["t126:t126"] != null){
        if (data.entities["t126:t126"][0].name == 't126'){
          return Promise.resolve("يجب أخذ الموافقة من مالك العلامة التجارية، و يمكنكم الاطلاع على النظام و اللائحة التنفيذية على الرابط التالي");
        }}
        if(data.entities["t116:t116"] != null){
        if (data.entities["t116:t116"][0].name == 't116'){
          return Promise.resolve("صحيح ، الكوفي شوب ضمن فئة المأكولات و المشروبات");
        }}
        if(data.entities["t118:t118"] != null){
        if (data.entities["t118:t118"][0].name == 't118'){
          return Promise.resolve("يمكنكم التظلم أمام لجنة النظر في تظلمات العلامات التجارية عبر الموقع الإلكتروني للعلامات التجاريه");
        }}
        if(data.entities["t119:t119"] != null){
        if (data.entities["t119:t119"][0].name == 't119'){
          return Promise.resolve("اتفاقية نيس تعني بتوحيد تسجيل الفئات في الدول المنظمة للاتفاقية");
        }}
        if(data.entities["t98:t98"] != null){
        if (data.entities["t98:t98"][0].name == 't98'){
          return Promise.resolve("  يجب تسجيل كل علامة على حدة بسبب أن كل قطاع و نشاط للشركة مختلف و له فئة تسجيل خاصة به ، و يمكنكم الاطلاع على النظام و اللائحة التنفيذية للعلامات التجارية عبر الرابط التالي : https://t.co/6z0nBgA7hv ");
        }}
        if(data.entities["t150:t150"] != null){
        if (data.entities["t150:t150"][0].name == 't150'){
          return Promise.resolve("لا يجوز تسجيل العلامة اللتي تحمل أسماء أو بيانات جغرافية");
        }}
        if(data.entities["t120:t120"] != null){
        if (data.entities["t120:t120"][0].name == 't120'){
          return Promise.resolve("لا يمكن تسجيل العلامة التجارية اذا تم تقليد الشكل الهندسي أو الاسم أو الصورة");
        }}
        if(data.entities["t88:t88"] != null){
        if (data.entities["t88:t88"][0].name == 't88'){
          return Promise.resolve("يمكنكم تقديم دعوى شطب علامة تجارية لدى المحكمة الإدارية");
        }}
        if(data.entities["t89:t89"] != null){
        if (data.entities["t89:t89"][0].name == 't89'){
          return Promise.resolve("  تُنشر العلامات التجارية في صحيفة أعمالي و يمكنكم الاطلاع عليها من خلال الرابط : https://t.co/dTnAkq3vH6 ");
        }}
        if(data.entities["t121:t121"] != null){
        if (data.entities["t121:t121"][0].name == 't121'){
          return Promise.resolve("نعم يحمى كعلامة تجارية");
        }}
         if(data.entities["t122:t122"] != null){
        if (data.entities["t122:t122"][0].name == 't122'){
          return Promise.resolve("بعد انتهاء فترة النشر و عدم تقديم اعتراض على علامتكم المنشورة");
        }}
        if(data.entities["t91:t91"] != null){
        if (data.entities["t91:t91"][0].name == 't91'){
          return Promise.resolve("النظام المطبق حالياً هو  نظام العلامات التجارية لدول مجلس التعاون لدول الخليج العربية، الموافق عليه بالمرسوم الملكي رقم (م/51) وتاريخ 26/07/1435هـ");
        }}
        if(data.entities["t90:t90"] != null){
        if (data.entities["t90:t90"][0].name == 't90'){
          return Promise.resolve("نعم يمكنكم الجمع بين العلامة التجارية و حق المؤلف بعد الاطلاع على النظام و اللائحة التنفيذة لهما");
        }}
        if(data.entities["t85:t85"] != null){
        if (data.entities["t85:t85"][0].name == 't85'){
          return Promise.resolve("الاسماء التجارية لدى الوزارة نأمل التواصل مع وزارة التجارة للاستفسار عبر: 92000667");
        }}
        if(data.entities["t82:t82"] != null){
        if (data.entities["t82:t82"][0].name == 't82'){
          return Promise.resolve(" يمكنكم التقديم على فئة جديدة حسب الاجراءات المتبعة ، و يمكنكم الاطلاع على النظام و اللائحة التنفيذية لنظام العلامات التجارية على الرابط التالي : https://t.co/6z0nBgA7hv");
        }}
        if(data.entities["t84:t84"] != null){
        if (data.entities["t84:t84"][0].name == 't84'){
          return Promise.resolve(" يمكنكم التقديم لجنة النظر في تظلمات العلامات التجارية عبر البريد الرسمي للجنة : TLC@SAIP.GOV.SA");
        }}
        if(data.entities["t81:t81"] != null){
        if (data.entities["t81:t81"][0].name == 't81'){
          return Promise.resolve("تعني أن العلامة تشمل صورة و حروف");
        }}
        if(data.entities["t160:t160"] != null){
        if (data.entities["t160:t160"][0].name == 't160'){
          return Promise.resolve(" يمكنكم الاطلاع النظام و اللائحة التنفيذية لنظام العلامات التجارية عبر الرابط التالي : https://t.co/aN862sq7Pw");
        }}
        if(data.entities["t80:t80"] != null){
        if (data.entities["t80:t80"][0].name == 't80'){
          return Promise.resolve("الرسوم غير مستردة");
        }}
        if(data.entities["t132:t132"] != null){
        if (data.entities["t132:t132"][0].name == 't132'){
          return Promise.resolve("الاسم التجاري يعد من اختصاصات وزارة التجارة والاستثمار، أما العلامة التجارية فيمكنكم تسجيلها تحت اسم فرد او مؤسسة");
        }}
        if(data.entities["t133:t133"] != null){
        if (data.entities["t133:t133"][0].name == 't133'){
          return Promise.resolve("نعم وتبقى مسجلة ومحمية");
        }}
        if(data.entities["t134:t134"] != null){
        if (data.entities["t134:t134"][0].name == 't134'){
          return Promise.resolve("العلامة التجارية تبقى محمية وسارية دون الحاجة لأي إجراء وماتم هو نقل الاختصاص من وزارة التجارة والاستثمار إلى الهيئة");
        }}
        if(data.entities["t180:t180"] != null){
        if (data.entities["t180:t180"][0].name == 't180'){
          return Promise.resolve("يمكنكم تقديم طلب نقل الملكية عبر نظام العلامات التجارية");
        }}
        if(data.entities["t104:t104"] != null){
        if (data.entities["t104:t104"][0].name == 't104'){
          return Promise.resolve("كل طلب جديد يدرس و يتم الرد علية بشكل رسمي عبر الموقع الإلكتروني");
        }}
        if(data.entities["t136:t136"] != null){
        if (data.entities["t136:t136"][0].name == 't136'){
          return Promise.resolve("نرجو التواصل معنا عبر بوابة مركز التواصل على الرابط التالي : https://t.co/bp3skdE9bZ أو عبر البريد الإلكتروني التالي: saip@saip.gov.sa  ");
        }}
        if(data.entities["t102:t102"] != null){
        if (data.entities["t102:t102"][0].name == 't102'){
          return Promise.resolve("تصنيف الفئات مرتبط بالتصنيف الدولي للسلع و الخدمات تصنيف نيس");
        }}
        if(data.entities["t101:t101"] != null){
        if (data.entities["t101:t101"][0].name == 't101'){
          return Promise.resolve("تمت الموافقة على طلبكم بالحماية للعلامة بمجملها، تعني لا يمكن أستخدام أحد مكونات العلامة بشكل منفصل");
        }}
        if(data.entities["t103:t103"] != null){
        if (data.entities["t103:t103"][0].name == 't103'){
          return Promise.resolve("شهادة الإيداع خدمة اختيارية، يمكنكم تقديمها للجهات الحكومية و الغير حكومية التي تطلب هذة الشهادة أثناء فترة النشر");
        }}
        if(data.entities["t_00:t_00"] != null){
        if (data.entities["t_00:t_00"][0].name == 't_00'){
          return Promise.resolve("العلامة التجارية هي إشارة تستعمل لتمييز سلع وخدمات مشروع ما عن غيرها من السلع والخدمات. هذا تعريف مبسط جدًا يشرح بشكل عام ما هي العلامة التجارية");
        }}
        if(data.entities[''] == null){
          return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى');
        }
      }
      else 
       {return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى')}
     
    case "industrialmodel":
     if(intent.confidence>0.7){
        if(data.entities["m1:m1"] != null){
        if (data.entities["m1:m1"][0].name == 'm1'){
          return Promise.resolve("التصميم الصناعي هو الجانب الزخرفي أو الجمالي من سلعة مفيدة. وقد يتخذ شكلاً مجسمًا مثل هيئة السلعة أو سطحها، أو شكلاً مسطحًا مثل الأنماط أو الخطوط أو الألوان")
        }}
       if(data.entities["m2:m2"] != null){
        if (data.entities["m2:m2"][0].name == 'm2')
          { return Promise.resolve( "النموذج او الرسم الصناعي هو المظهر الزخرفي أو الجمالي لسلعة ما، ومـن الممكـن أن يتـألف مـن عناصـر مجسـمة مثـل شـكل السـلعة أو سـطحها أو مـن عناصـر ثنائيـة الأبعـاد مثـل الرسوم أو الخطوط أو الألوان")
}}
       if(data.entities["m3:m3"] != null){
        if (data.entities["m3:m3"][0].name == 'm3') {
         return Promise.resolve("تمنح حماية التصميم الصناعي صاحب الحماية حق منع الغير من نسخ أو تقليد التصميم الصناعي دون تصريح، وبعبارة أخرى يمكن لصاحب الحق أن يمنع الآخرين من صنع أو استيارد أو تصدير أو بيع أي منتج يتضمن هذا التصميم الصناعي من دون تصريحه")
        }}
       if(data.entities["m4:m4"] != null){
        if (data.entities["m4:m4"][0].name == 'm4'){
         return Promise.resolve("• للمساعدة على ضمان عائد عادل من الاستثمار. • لتشجيع المنافسة المشروعة والممارسات التجارية الشريفة ضد النسخ والتقليد.• للمساهمة فـي توسـيع القيمـة التجاريـة للشـركات، فالرسـم أو النمـوذج الصـناعي النـاجح يعتبـر مـن الأصـول التجارية للشركة.  • لتشجيع الإبداع في قطاع الصناعات والفنون التقليدية والحرف اليدوية")
        }}
      if(data.entities["m5:m5"] != null){
        if (data.entities["m5:m5"][0].name == 'm5'){
        return Promise.resolve("تقتضي معظم القوانين الوطنية أن يكون جديدا أو أصليا وألا تمليه وظيفته. ويعني ذلك أنه يتسم أساسا بطابع جمالي ولا تحمى فيه أية عناصر تقنية للسلعة التي يطبق عليها.")
        }}
       if(data.entities["m6:m6"] != null){
        if (data.entities["m6:m6"][0].name == 'm6')
          {
         return Promise.resolve(" 1 - فـي معظـم البلـدان، لا بـد مـن تسـجيل الرسـم أو النمـوذج الصـناعي حتـى يحظـى بالحمايـة بناء على قانون الرسوم والنماذج الصناعية . وكقاعدة عامة، يجب أن يكون الرسم أو النموذج 'جديـدا' أو 'أصـليا' لتسـجيله. وهنـاك اخـتلاف بـين البلـدان بشـأن تعريـف المصـطلحين وبـين إجـراءات التسـجيل نفسـها. وبصـورة عامـة، يعنـي مصـطلح 'جديد' أن الرسـم أو النمـوذج لـم يسـبقه رسـم أو نمـوذج مطـابق أو مشـابه لـه ومعـروف مـن ذي قبـل. وبمجرد تسجيل الرسم أو النموذج تصدر شهادة بذلك.2 - وبحسب القانون الوطني المعنـي ونـوع الرسـم أو النمـوذج، يجـوز حمايـة الرسـم أو النمـوذج الصناعي باعتبـاره مصنفا من مصنفات الفنون التطبيقية بموجـب قـانون حـق المؤلـف أيضـا. وفـي بعض البلـدان، يمكـن أن تشـمل الحمايـة الرسـم أو النمـوذج الصـناعي وحـق المؤلـف فـي وقـت واحـد. وفي بلـدان أخـرى، تلغـي الواحـدة الأخـرى، أي أن مالـك الحـق لا يمكنـه أن يتمسـك بنـوع مـن الحمايـة بمجرد اختياره النوع الآخر.3 - ويمكن حماية الرسم أو النموذج الصـناعي بموجـب قـانون المنافسـة غيـر المشـروعة فـي ظروف معينة.")   
          }}
       if(data.entities["m7:m7"] != null){
        if (data.entities["m7:m7"][0].name == 'm7'){
         return Promise.resolve("فـي معظـم البلـدان، لا بـد مـن تسـجيل الرسـم أو النمـوذج الصـناعي حتـى يحظـى بالحمايـة")
        }}
       if(data.entities["m8:m8"] != null){
        if (data.entities["m8:m8"][0].name == 'm8'){
      return Promise.resolve("هنـاك اخـتلاف بـين البلـدان بشـأن تعريـف المصـطلح وبـين إجـراءات التسـجيل نفسـها. وبصـورة عامـة، يعنـي مصـطلح 'جديد' أن الرسـم لـم يسـبقه رسـم مطـابق أو مشـابه لـه ومعـروف مـن ذي قبـل.")
        }}
    if(data.entities["m9:m9"] != null){
        if (data.entities["m9:m9"][0].name == 'm9'){
          return Promise.resolve("فـي بعض البلـدان يمكـن أن تشـمل الحمايـة النمـوذج الصـناعي وحـق المؤلـف فـي وقـت واحـد. وفي بلـدان أخـرى، تلغـي الواحـدة الأخـرى، أي أن مالـك الحـق لا يمكنـه أن يتمسـك بنـوع مـن الحمايـة بمجرد اختياره النوع الآخر.") 
        }}
       if(data.entities["m10:m10"] != null){
        if (data.entities["m10:m10"][0].name == 'm10'){
      return Promise.resolve("تكفل الحماية لصاحب الرسم أو النموذج الصناعي حقًا استئثاريًا بمنع استنساخ أو تقليد الرسم أو النموذج الصناعي من قبل الغير بدون تصريح. وهذا الحق الاستئثاري يتضمن حق صنع واستيراد وتصدير وبيع أي منتج يتضمن هذا الرسم أو النموذج الصناعي. ويمكن لصاحب الرسم أن يرخص أو يسمح للغير باستعمال رسمه أو تصميمه كما يمكنه أن يبيع حقه الاستئثاري للغير.")
        }}
       if(data.entities["m11:m11"] != null){
        if (data.entities["m11:m11"][0].name == 'm11'){
      return Promise.resolve("يمكنكم تسجيل التصميم من خلال نظام النماذج الصناعية عبر الرابط التالي: https://t.co/7r8LXVHCTv")
        }}
       if(data.entities["m13:m13"] != null){
        if (data.entities["m13:m13"][0].name == 'm13'){
      return Promise.resolve("يمكن حماية التصميم الفني كحق مؤلف بدون الحاجة للتسجيل، وايضاً يمكنك حمايتها وتسجيلها كنموذج صناعي")
        }}
       if(data.entities["m12:m12"] != null){
        if (data.entities["m12:m12"][0].name == 'm12'){
      return Promise.resolve("نفيدكم بأنه لا يوجد تسجيل للنماذج الصناعية بدول الخليج لدى الهيئة")
        }}
       if(data.entities[''] == null){
          return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى');
        }
     } else 
       {return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى')}
      
      
    case "patent":
      if(intent.confidence>0.7){
       if(data.entities["p0:p0"] != null){
        if (data.entities["p0:p0"][0].name == 'p0'){
        return Promise.resolve("البراءة هي مستند تمنحه السلطات المختصة (عادة مكتب البراءات )، بناء لطلب يتم إيداعه لديها يصف الاختراع . وينتج عن هذا المستند وضع قانوني يمنع الغير من استغلال هذه البراءة من دون تصريح صاحبها. بمعنى أخر، فإن البراءة تحمي الاختراع وتمنح صاحبه حقاً استئثارياً باستغلاله لمدة محددة. أما الاختراع فيمكن تعريفه بأنه حل جديد لمشكلة تقنية ما.")
          }}
        if(data.entities["p1:p1"] != null){
        if (data.entities["p1:p1"][0].name == 'p1'){
       return Promise.resolve("إن الغرض من البراءة هو توفير شكل من أشكال الحماية للتقدم التكنولوجي المستمر. ونظرًيًا، فإن الحماية بواسطة البراءة تكافئ ليس فقط عملية ابتكار الاختراع، بل أيضًا طريقة تنفيذ هذا الاختراع التي بفضلها يمكن تحقيقه تقنيًا وتسويقه. وهذا الحافز يؤدي إلى الحث على المزيد من الإبداع ويشجع الشركات على الاستمرار في تطوير تقنيات جديدة لتسويق ابتكاراتها وفي جعلها أكثر فائدة ومرغوبة أكثر للصالح العام.")   
        }}
        if(data.entities["p2:p2"] != null){
        if (data.entities["p2:p2"][0].name == 'p2'){
       return Promise.resolve("للبراءات دور حافز للأفراد بالاعتراف بإبداعهم ومكافأتهم ماليا لاختراعاتهم التي يمكن تسويقها. وتشجع تلك الحوافز على الابتكار الذي يضمن تحسن نوعية الحياة البشرية باستمرار.")   
        }}
        if(data.entities["p3:p3"] != null){
        if (data.entities["p3:p3"][0].name == 'p3'){
        return Promise.resolve("لقد تم تطوير هذا النظام خلال عدة قرون. نجد براءات يرجع تاريخها إلى حوالى العام 1700. لقد تطور النظام في السنوات الماضية ونحن الآن نملك نظاماً حديثاً جداً ولا نزال نعمل على تطوير النظام العالمي وتحديثه ومواءمته مع التغيرات التكنولوجي والتطور الاقتصادي.")
        }}
        if(data.entities["p4:p4"] != null){
        if (data.entities["p4:p4"][0].name == 'p4'){
          return Promise.resolve("توفر الاتفاقات الدولية الحماية بواسطة البراءات لكل الاختراعات (المنتجات والعمليات) التي يتم تطويرها في كل المجالات التقنية. فالتركيبة الكيمائية يمكن أن تحصل على البراءة وكذلك الآلات وعمليات تطوير أو تحسين أو صنع الأشياء.")
        }}
        if(data.entities["p5:p5"] != null){
        if (data.entities["p5:p5"][0].name == 'p5'){
        return Promise.resolve("هناك عدة ميزات يبحث عنها مكتب البراءات ليعتبر الاختراع قابلاً للحصول على البراءة. في البدء، لا بد من إيداع طلب البراءة . في معظم الحالات يقوم خبير فني بفحص هذا الطلب للتأكد من أنه مستوف للمعايير الموضوعية المطلوبة لاستصدار البراءة. أول هذه المعايير هي أن يكون الاختراع جديداً، بمعنى أنه يجب ألا يكون قد تم صنعه أو تنفيذه أو استخدامه من قبل. المعيار الثاني هو ضرورة وجود نشاط ابتكاري، بمعنى أن الاختراع يجب أن يمثل تقدماً كافياً في حالة التقنية الصناعية السابقة حتى يعتبر مستحقاً للبراءة. المعيار الثالث هو أن الاختراع يجب أن يكون قابلاً للتطبيق الصناعي، أي للاستخدام بطريقة ما.")
        }}
        if(data.entities["p6:p6"] != null){
        if (data.entities["p6:p6"][0].name == 'p6'){
        return Promise.resolve("الأشياء الموجودة في الطبيعة التي تكتشف ولا تخترع. فلا يمكن منح البراءة مثلاً لشخص اكتشف كوكباً جديدًا. الآلات التي تتحدى قوانين الطبيعة مثل آلة الحركة المستمرة. النظريات العلمية والقواعد الحسابية. المخططات، والقواعد والأساليب ولا سيما الأساليب التجارية وتلك التي تتعلق بالنشاط العقلي والألعاب. طرق التشخيص والعلاج والجراحة اللازمة لمعالجة البشر والحيوانات. (المنتجات المستخدمة في التشخيص يمكن أن تحصل على البراءة ). النباتات والحيوانات، خلاف الأحياء الدقيقة، والطرق البيولوجية أساساً لإنتاج النباتات والحيوانات، خلاف الأساليب والطرق غير البيولوجية والبيولوجية الدقيقة.")
        }}
        if(data.entities["p7:p7"] != null){
        if (data.entities["p7:p7"][0].name == 'p7'){
        return Promise.resolve("الإجابة العامة هي أنه خلال مدة الحماية يحق لمالك البراءة منع الآخرين من صنع أو استخدام أو بيع أو استيارد الاختراع المحمي بموجب هذه البراءة . ولكن يحق له أن يتنازل عن حقوقه (يبيعها) للغير أو أن ينشئ عقود ترخيص تسمح للغير باستغلال اختراعه.")
        }}
        if(data.entities["p7:p7_1"] != null){
        if (data.entities["p7:p7_1"][0].name == 'p7'){
        return Promise.resolve("تقنيًا وبصورة خاصة جدًا تكمن فوائد البراءة في كونها تعطي لصاحبها الحق بمنع الآخرين من صنع أو استخدام أو بيع أو استيراد الاختراع في الإقليم الذي تغطيه. وهذا لا يعطي بالضرورة المخترع أو صاحب البراءة الحق في استخدام الاختراع إذا اتضح مثلاً أن هذا الاستخدام غير قانوني (كما هي الحال بالنسبة إلى استخدام آلة القمار مثلاً) ولكنه يعطيه الحق في منع الآخرين من تسويق الاختراع والاستفادة منه خلال فترة زمنية محددة.")
        }}
        if(data.entities["p8:p8"] != null){
        if (data.entities["p8:p8"][0].name == 'p8'){
        return Promise.resolve("مدة الحماية هي على الأقل 20 عاما منذ تاريخ ايداع طلب البراءة")
        }}
        if(data.entities["p9:p9"] != null){
        if (data.entities["p9:p9"][0].name == 'p9'){
          return Promise.resolve("نعم، إن مدة الحماية وبموجب اتفاقية دولية هي على الأقل 20 عاماً منذ تاريخ إيداع طلب البراءة .")
        }}
        if(data.entities["p10:p10"] != null){
        if (data.entities["p10:p10"][0].name == 'p10'){
        return Promise.resolve("يتمتع صاحب البراءة بحق منع الآخرين من تنفيذ الاختراع موضوع البراءة أو استخدامه أو بيعه أو استيراده. ويمكنه منع تسويق الاختراع وبيعه ولكن هذا الحق لا يطبق إلا في البلدان التي منحت البراءة.")
        }}
        if(data.entities["p11:p11"] != null){
        if (data.entities["p11:p11"][0].name == 'p11'){
         return Promise.resolve("لا، لا يمكن ذلك في ظل نظام البراءات العالمي الحالي حيث لا توجد براءة واحدة تغطي كل بلدان العالم أو حتى عددا كبيرًا من البلدان في العالم. فنظام البراءات لا يزال نظاماً إقليميا؛ ولحماية اختراع ما في بلد معين ينبغي الحصول على براءة في هذا البلد. لكن يوجد اتفاق دولي تديره الويبو ويسمى معاهدة التعاون بشأن البراءات وهو يتناول إجراءات الإيداع والبحث والنشر والفحص للطلبات الدولية. وهذه المعاهدة تسهل الحصول على البراءات في الدول المتعاقدة إذ تنص على إيداع طلب دولي واحد ومتابعته في المكاتب الوطنية أو الإقليمية المختلفة للدول الأعضاء المعينة التي يعود لها وحدها وفق أحكام هذه المعاهدة أن تمنح البراءات.") 
        }}
        if(data.entities["p12:p12"] != null){
        if (data.entities["p12:p12"][0].name == 'p12'){
        return Promise.resolve("هذا صحيح. إذا كنت تملك براءات في عشر دول، عليك أن تدفع رسوم الحفاظ عليها في كل بلد من هذه البلدان العشرة، وٕإذا تخلفت عن الدفع في أحد هذه البلدان فسوف يسقط حقك بالحماية التي توفرها البراءة .")
        }}
        if(data.entities["p13:p13"] != null){
        if (data.entities["p13:p13"][0].name == 'p13'){
         return Promise.resolve("إن البراءة هي أكثر الطرق فعالية لحماية الاختراع ولكن وكما ذكرت سابقا يتم منح البراءات مقابل قيام المخترع بالكشف الكامل عن الاختراع للجمهور. توجد طريقة أخرى فعالة للحصول على الحماية هي الاحتفاظ بسرية التقنية المستعملة من خلال اللجوء إلى ما يعرف بالأسرار التجارية التي يمكن بفضلها الاحتفاظ بسرية المعلومات التي تخص الاختراع. ولكن المشكلة في هذا النوع من الحماية أنه حالما يتم طرح المنتج في السوق يمكن تفكيكه وفحصه وتحليله واكتشاف السر وهذا يؤدي بالطبع إلى فقدان الحماية. أما في حالة البراءة ، فلا يهم أن يعرف الآخرون كيف يصنع المنتج من البراءة ، لأنه في الحقيقة يكفي قراءة طلب البراءة وبالتالي لا يهم أن تكون المعلومات مكشوفا عنها أو لا، لأنك عندما تحصل على البراءة فسوف تتمتع بالحماية. أما الحماية بواسطة الأسرار التجارية فهي متاحة دائمًا ويمكن أن تكون نافعة جدًا في مجال الدراية العملية، أي الخبرة التقنية الضرورية لاستخدام تقنية ما بأكبر فعالية.") 
        }}
        if(data.entities["p15:p15"] != null){
        if (data.entities["p15:p15"][0].name == 'p15'){
        return Promise.resolve("البراءة حق استئثاري يمنح نظير اختراع يكون منتجاً أو عملية تتيح طريقة جديدة لإنجاز عمل ما أو تقدم حلا تقنيا جديدا لمشكلة ما.")
        }}
        if(data.entities["p16:p16"] != null){
        if (data.entities["p16:p16"][0].name == 'p16'){
          return Promise.resolve("• يجب أن يكون جديدا بحيث يبين بعض الخصائص الجديدة غير المعروفة في مجموعة المعارف المتوافرة في مجاله التقني، ويطلق على مجموعة المعارف تلك اسم) حالة التقنية الصناعية السابقة) .  • يجب أن يبين الاختراع نشاطا ابتكارية لا يمكن لأي شخص له معرفة متوسطة في المجال التقني استنتاجه.  • لا بد أن تكون له فائدة عملية وأن يكون قابلا للتطبيق الصناعي.  • يجب أن يكون الموضوع أهلا للبراءة بموجب القانون. وفي العديد من البلدان، تدخل النظريات العلمية أو مناهج العلوم الرياضية أو الأصناف النباتية أو الحيوانية أو الاكتشافات المتعلقة بالمواد الطبيعية أو المناهج التجارية أو أساليب العلاج الطبي (على عكس المستلزمات الطبية) في عداد الموضوعات غير الأهل للبراءة عامة.")
        }}
        if(data.entities["p17:p17"] != null){
        if (data.entities["p17:p17"][0].name == 'p17'){
          return Promise.resolve("• يجب أن يكون جديدًا بحيـث يبـين بعـض الخصـائص الجديـدة غيـر المعروفـة فـي مجموعـة المعــارف المتـــوافرة فـــي مجالــه التقنـــي. ويطلــق علـــى مجموعــة المعـــارف تلـــك اســم (حالـــة التقنيـــة الصـــناعية السابقة )  .  • ويجـب أن يبـين الاختـراع نشـاطا ابتكاريـاً لا يمكـن لأي شـخص لـه معرفـة متوسـطة فـي المجـال التقنـي استنتاجه.  • فلا بد أن تكون له فائدة عملية وأن يكون قابلاً للتطبيق الصناعي.  • وفي الأخير، يجب أن يكون الموضوع (أهلا للبراءة ) بموجـب القـانون. ")
        }}
        if(data.entities["p18:p18"] != null){
        if (data.entities["p18:p18"][0].name == 'p18'){
          return Promise.resolve("أكثر الطرق شيوعا واكثرها فعالية لحماية الاختراع هي من خلال الحصول على براءة .والبراءة تمنح من قبل مكتب البراءات في البلد المطلوب حماية الاختراع فيه .ومقابل حصوله على الحقوق الاستثمارية يلتزم المخترع بالكشف عن المعلومات المتعلقة بالاختراع . ومن الطرق الاخرى للحماية هي المحافظة على سرية التقنية وهو مايعرف بالاسرار التجارية . وتسمح الحماية بموجب الاسرار التجارية بالمحافظةعلى الطبيعة السرية للمعلومات وعلى عدم الكشف عن هذه المعلومات لاشخاص غير مصرح لهم ")
        }}
        if(data.entities["p19:p19"] != null){
        if (data.entities["p19:p19"][0].name == 'p19'){
         return Promise.resolve(" نعم، تسمح الحماية بموجب الأسرار التجارية بالمحافظة على الطبيعة السرية للمعلومات وعلى عدم الكشف عن هذهالمعلومات لأشخاص غير مصرح لهم.") 
        }}
        if(data.entities["p20:p20"] != null){
        if (data.entities["p20:p20"][0].name == 'p20'){
        return Promise.resolve(" تشمل المرحلة الأولى من إجراءات الحصول على براءة إيداع طلب براءة. ويتضمن الطلب اسم الاختراع وبيانا بمجاله التقني عامة. ومن الضروري أن يشمل الطلب خلفية الاختراع ووصفا له بلغة واضحة وتفاصيل كافية لأي شخص له معرفة متوسطة في المجال كي يستعمل الاختراع أو ينفذه. وتكون تلك الأوصاف عادة مرفقة بمواد مرئية مثل الر سوم أو التصاميم أو الرسوم البيانية لوصف الاختراع بشكل أفضل. ويشمل الطلب عدة ( مطالب ) أيضا، أي المعلومات التي تحدد نطاق الحماية الممنوحة بموجب البراءة.")
        }}
        if(data.entities["p21:p21"] != null){
        if (data.entities["p21:p21"][0].name == 'p21'){
        return Promise.resolve("عـادة أمـام المحـاكم التـي لهـا صـلاحية وقـف التعـدي علـى البـراءات فـي معظم الأنظمة.")
        }}
        if(data.entities["p22:p22"] != null){
        if (data.entities["p22:p22"][0].name == 'p22'){
        return Promise.resolve("لمالك البراءة الحق في تقرير من الـذي يجـوز لـه أو لا يجـوز لـه الانتفـاع بالاختراع المشمول بالبراءة خلال مدة حماية الاختراع. ويجوز لمالك البـراءة التصريح للغيـر أو التـرخيص له بالانتفاع بالاختراع وفقا لشروط متفق عليها ويجـوز لمالـك البـراءة أيضـا بيـع حقـه فـي الاختـراع لشـخص آخـر يصـبح بـذلك مالـك البـراءة الجديـد. وعنـد انقضاء مدة البـراءة، تنتهـي الحمايـة ويـؤول الاختـراع إلـى الملـك العـام. وهـذا يعنـي أن مالـك البـراءة لـم يعـد يتمتع بالحقوق الاستئثارية في الاختراع الذي يصبح في متناول الغير لاستغلاله في التجارة.")
        }}
          if(data.entities["p23:p23"] != null){
        if (data.entities["p23:p23"][0].name == 'p23'){
          return Promise.resolve("يمـنح البـراءة المكتـب الـوطني للبـراءات أو المكتـب الإقليمـي الـذي يعمـل لصـالح عـدة بلـدان مثـل المكتـب الأوروبي للبراءات والمنظمة الإقليمية الأفريقيـة للملكيـة الصـناعية أو مكتـب البـراءات لـدول مجلـس التعـاون الخليجـي. وبنـاء علـى تلـك الأنظمـة الإقليميـة، يلـتمس مـودع الطلـب حمايـة الاختـراع فـي بلـد واحـد أو أكثـر ويبت كل بلد في منح الحماية بالبراءة في أراضيه من عدم منحها وتنص معاهدة التعاون بشأن البراءات التـي تـديرها الويبـو علـى إيـداع طلـب دولـي واحـد للبـراءة تكـون لـه الآثار ذاتها المترتبة على الطلبات الوطنية المودعة في البلدان المعينة. ويجوز لمودع الطلب الذي يلـتمس الحمايـة أن يـودع طلبـا واحـدا ويلـتمس الحمايـة فـي العـدد الـذي يـراه مناسـبا مـن البلـدان الموقعـة. ولا تمـنح معاهـدة التعـاون بشـأن البـراءات (بـراءة دوليـة)، ولكنهـا تبسـط فقـط إجـراءات الإيـداع والبحـث والفحـص. أمـا اختصاص منح البراءة فيعود فقط للمكاتب الوطنية أو الإقليمية كما سبق وذكرنا.")
        }}
        if(data.entities["p24:p24"] != null){
        if (data.entities["p24:p24"][0].name == 'p24'){
        return Promise.resolve("الحماية تبدأ من تاريخ الايداع")
        }}
        if(data.entities["ip_registration:registration"] != null){
        if (data.entities["ip_registration:registration"][0].name == 'ip_registration'){
        return Promise.resolve("يمكنك التسجيل لـ:\n 1 - البراءات (التصاميم المعمارية، النماذج الصناعية، الأصناف النباتية، التطبيقات الإلكترونية، تصاميم الدارات المتكاملة) عن طريق الرابط: epatentsso.saip.gov.sa \n2 - الاعمال المحمية بنظام حقوق المؤلف والحقوق المجاورة عن طريق الرابط: copyright.saip.gov.sa  \n3 - العلامات التجارية عن طريق الرابط: tm.saip.gov.sa \n4 - ترخيص ممارسة أنشطة الملكية الفكرية عن طريق الرابط: agent.saip.gov.sa ")
        }}
        if(data.entities["p25:p25"] != null){
        if (data.entities["p25:p25"][0].name == 'p25'){
         return Promise.resolve("يمكنك التسجيل لـ:\n 1 - البراءات (التصاميم المعمارية، النماذج الصناعية، الأصناف النباتية، التطبيقات الإلكترونية، تصاميم الدارات المتكاملة) عن طريق الرابط: epatentsso.saip.gov.sa \n2 - الاعمال المحمية بنظام حقوق المؤلف والحقوق المجاورة عن طريق الرابط: copyright.saip.gov.sa  \n3 - العلامات التجارية عن طريق الرابط: tm.saip.gov.sa \n4 - ترخيص ممارسة أنشطة الملكية الفكرية عن طريق الرابط: agent.saip.gov.sa ")
        }}
         if(data.entities["p26:p26"] != null){
        if (data.entities["p26:p26"][0].name == 'p26'){ 
        return Promise.resolve(" إن الجهة المختصة بالنظر في انتهاك براءات الاختراع و النماذج الصناعية هي وزارة العدل" )
        }}
         if(data.entities["p27:p27"] != null){
        if (data.entities["p27:p27"][0].name == 'p27'){ 
          return Promise.resolve("لا يوجد حماية فكرية للتطبيقات الحماية لأكواد البرمجة يمكنكم تسجيلها و إصدار شهادة ملكية للتطبيق على الرابط التالي: https://t.co/PCf2eZnu1s…")
        }}
        if(data.entities["p28:p28"] != null){
        if (data.entities["p28:p28"][0].name == 'p28'){   
          return Promise.resolve("عند تقديمكم للطلب مستوفي الشروط و سداد الرسوم المقررة")
        }}
         if(data.entities["p30:p30"] != null){
        if (data.entities["p30:p30"][0].name == 'p30'){  
          return Promise.resolve("الرسوم التي يتم دفعها لا تسترد")
        }}
         if(data.entities["p31:p31"] != null){
        if (data.entities["p31:p31"][0].name == 'p31'){  
          return Promise.resolve("عناصر الحماية هي ما يميز الاختراع الخاص بكم عن الاختراعات الموجودة")
        }}
         if(data.entities["p32:p32"] != null){
        if (data.entities["p32:p32"][0].name == 'p32'){ 
          return Promise.resolve("حالياً لا توجد خدمة الرهن لبرءات الاختراع.")
        }}
          if(data.entities["p33:p33"] != null){
        if (data.entities["p33:p33"][0].name == 'p33'){ 
          return Promise.resolve("يؤسفنا ان الاكتشافات و طرق معالجة جسم الإنسان، أو الحيوان جراحياً، أو علاجياً، وطرق تشخيص المرض المطبقة على جسم الإنسان أو الحيوان لا يوجد لها حقوق فكرية, ويستثنى من ذلك المنتجات التي تستعمل في أي من تلك الطرق" )
        }}
          if(data.entities["p34:p34"] != null){
        if (data.entities["p34:p34"][0].name == 'p34'){  
        return Promise.resolve("البراءات تحمى لمدة عشرون سنه وفي حال الانتهاك لبراءة مسجلة يتم رفع دعوى لدا المحاكم المختصة ."      )
        }}
         if(data.entities["p35:p35"] != null){
        if (data.entities["p35:p35"][0].name == 'p35'){   
        return Promise.resolve("تبدأ الحماية من تاريخ الإيداع، و الحصول على شهادة براءة الاختراع بعد اجتياز عدة مراحل يقرر الفاحص بالمنح أو الرفض.")
        }}
        if(data.entities["p36:p36"] != null){
        if (data.entities["p36:p36"][0].name == 'p36'){   
        return Promise.resolve("التصاميم المعمارية محمية من تاريخ النشر لها مباشره و يمكنكم تسجيلها في  خدمة التسجيل الاختياري عبر الموقع الرسمي للهيئة على الرابط التالي : https://t.co/PCf2eZF5q2")
        }}
        if(data.entities["p37:p37"] != null){
        if (data.entities["p37:p37"][0].name == 'p37'){ 
         return Promise.resolve("عناصر الحماية هي ما يميز الاختراع الخاص بكم عن الاختراعات الموجودة.")
        }}
        if(data.entities["p38:p38"] != null){
        if (data.entities["p38:p38"][0].name == 'p38'){ 
          return Promise.resolve("في حال انتهاك براءة الاختراع الخاصة بكم، يمكنكم التواصل مع لجنة النظر في  دعاوى براءات الاختراع و النماذج الصناعية على البريد الإلكتروني التالي : Plc@saip.gov.sa")
        }}
         if(data.entities["p39:p39"] != null){
        if (data.entities["p39:p39"][0].name == 'p39'){  
          return Promise.resolve("يوجد لدى الهيئة مسار خاص بالدارات المتكاملة و يمكنكم تسجيلها على الرابط  التالي : https://t.co/Qhv8X2DbpZ")
        }}
         if(data.entities["p40:p40"] != null){
        if (data.entities["p40:p40"][0].name == 'p40'){   
          return Promise.resolve("يمكنكم الإطلاع على أخر المستجدات عبر الدخول على حسابكم في نظام براءات الاختراع على الرابط التالي : https://t.co/tebmct0qDV")
        }}
          if(data.entities["p41:p41"] != null){
        if (data.entities["p41:p41"][0].name == 'p41'){    
          return Promise.resolve("تم تعريف المسار السريع في هذا التصميم يمكنك الاطلاع عليه ويسعدنا توصلكم https://t.co/s4t8c5wYJc https://t.co/088l5SCb79")
        }}
        if(data.entities["p42:p42"] != null){
        if (data.entities["p42:p42"][0].name == 'p42'){    
          return Promise.resolve("أهلاً بك، يمكنك تقديم دعوى أمام لجنة النظر في دعاوى براءات الاختراع بمدينة الملك عبدالعزيز للعلوم والتقنية كونها الجهة المختصة حالياً بالنماذج الصناعية.")
        }}
          if(data.entities["p43:p43"] != null){
        if (data.entities["p43:p43"][0].name == 'p43'){  
        return Promise.resolve(" شكراً لتواصلكم ، حماية الاختراع تكون داخل نطاق الدولة المانحة لشهادة براءة الاختراع.")
        }}
         if(data.entities["p44:p44"] != null){
        if (data.entities["p44:p44"][0].name == 'p44'){  
          return Promise.resolve("يمكنكم الإطلاع على النظام و اللائحة التنفيذية لبراءات الاختراع و حق المؤلف على الرابط التالي: https://t.co/SjhmMrhCwI"     )
        }}
        if(data.entities["p45:p45"] != null){
        if (data.entities["p45:p45"][0].name == 'p45'){   
         return Promise.resolve("الحماية تكون في نطاق الدول التي تم التسجيل و منح براءة الاختراع فيها، و يمكنكم الاطلاع على النظام و اللائحة التنفيذية لبراءات الاختراع على الرابط التالي:https://t.co/SjhmMrhCwI") 
        }}
         if(data.entities["p46:p46"] != null){
        if (data.entities["p46:p46"][0].name == 'p46'){    
          return Promise.resolve("يمكنكم الاطلاع على الرسوم من خلال اللائحة التنفيذية  على الرابط التالي: https://t.co/xNRlaTz2fH ")
        }}
        if(data.entities["p47:p47"] != null){
        if (data.entities["p47:p47"][0].name == 'p47'){      
        return Promise.resolve("يمكنكم الاطلاع على المدة النظامية من خلال اللائحة التنفيذية لنظام براءات الاختراع عبر الرابط التالي : https://t.co/aN862sq7Pw"      )
        }}
         if(data.entities["p48:p48"] != null){
        if (data.entities["p48:p48"][0].name == 'p48'){  
        return Promise.resolve(" الرسومات ليست ألزامية للتقديم على طلب براءة اختراع ")
        }}
        if(data.entities["p49:p49"] != null){
        if (data.entities["p49:p49"][0].name == 'p49'){    
        return Promise.resolve("نعم ، الإختراعات هي تطوير لإختراعات سابقة. و يمكنكم الاطلاع على النظام و اللائحة التنفيذية البراءات الاختراع : https://t.co/6z0nBgA7hv")
        }}
        if(data.entities[''] == null){
          return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى');
        }
        
        }  else {return Promise.resolve('آسفة لم افهم سؤالك، فضلا أعد صياغة السؤال بطريقة أخرى' )}
          
     default:
      return Promise.resolve("آسفه لا استطيع اجابتك")
      
  
  }
  }  
  }
   

exports.responseFromWit = responseFromWit;

   