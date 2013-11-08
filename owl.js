var owlXml = '<?xml version="1.0"?>' +
'<rdf:RDF xmlns="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#"' +
     'xml:base="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31"' +
     'xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"' +
     'xmlns:swrl="http://www.w3.org/2003/11/swrl#"' +
     'xmlns:ToggleButtonModel3="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#javax.swing.JToggleButton$ToggleButtonModel@41"' +
     'xmlns:ToggleButtonModel="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#javax.swing.JToggleButton$ToggleButtonModel@419"' +
     'xmlns:owl="http://www.w3.org/2002/07/owl#"' +
     'xmlns:xsd="http://www.w3.org/2001/XMLSchema#"' +
     'xmlns:swrlb="http://www.w3.org/2003/11/swrlb#"' +
     'xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' +
     'xmlns:ToggleButtonModel2="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#javax.swing.JToggleButton$ToggleButtonModel@182">' +
    '<owl:Ontology rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31">' +
        '<owl:versionInfo rdf:datatype="http://www.w3.org/2001/XMLSchema#string">1.2</owl:versionInfo>' +
        '<rdfs:comment rdf:datatype="http://www.w3.org/2001/XMLSchema#Name">Author: Mehmet Tamtürk</rdfs:comment>' +
        '<rdfs:comment rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Breakfast Ontology</rdfs:comment>' +
    '</owl:Ontology>' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// Annotation properties' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// Datatypes' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// Object Properties' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canEat -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canEat">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canNotEat -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canNotEat">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#goodWith -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#goodWith">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topObjectProperty"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasDisease -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasDisease">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasDislike -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasDislike">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasIngredient -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasIngredient">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasLike -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasLike">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasMenuType -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasMenuType">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MenuType"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasOccupation -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasOccupation">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OccupationTypes"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasSuitablePair -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasSuitablePair">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#notGoodWith -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#notGoodWith">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// Data properties' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#breakfastInfo -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#breakfastInfo"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasCalorie -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasCalorie">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#breakfastInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#int"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasCholesterol -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasCholesterol">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#breakfastInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#boolean"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasGlucose -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasGlucose">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#breakfastInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#int"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasHeight -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasHeight">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#userInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasMaxCalorie -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasMaxCalorie">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OccupationTypes"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#occupationInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#int"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasName -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasName">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#userInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasSpecialInfo -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasSpecialInfo">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#userInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasSurname -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasSurname">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#userInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasTurkishName -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasTurkishName">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#breakfastInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasWeight -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasWeight">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#userInfo"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#occupationInfo -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#occupationInfo"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#userInfo -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#userInfo">' +
        '<rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// Classes' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cheese -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cheese">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MilkProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coffee -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coffee">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#EggProducts -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#EggProducts">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FruitJuices -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FruitJuices">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Galet -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Galet">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
        '<rdfs:comment xml:lang="tr">Galeta</rdfs:comment>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Jam -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Jam">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SugarProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Menemen -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Menemen">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#EggProducts"/>' +
        '<owl:disjointWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MenuType -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MenuType"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MilkProducts -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MilkProducts">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OccupationTypes -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OccupationTypes"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Oil -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Oil">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Olive -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Olive">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#EggProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Onion -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Onion">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Patty -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Patty">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pepper -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pepper">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Sauces -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Sauces">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SavoryPastry -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SavoryPastry">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SpecialItems -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SpecialItems">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SugarProducts -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SugarProducts">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tea -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tea">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tomato -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tomato">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// Individuals' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#A0D3G -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#A0D3G">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">152</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">85</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Abdülkadir Zimbamba</hasName>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BloodPressure"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VeryActive"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#A1BCQ -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#A1BCQ">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Mehmet Tamtürk</hasName>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AppleJuice"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coronary"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cream"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Egg"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedOmelette"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalTomato"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Active -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Active">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OccupationTypes"/>' +
        '<hasMaxCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">800</hasMaxCalorie>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AppleJuice -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AppleJuice">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FruitJuices"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">50</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Elma Suyu</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AyvalikToast -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AyvalikToast">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast"/>' +
        '<rdfs:comment xml:lang="tr">Ayvalık Tostu</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackOlive -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackOlive">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Olive"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">15</hasGlucose>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">233</hasCalorie>' +
        '<rdfs:comment xml:lang="tr">Siyah Zeytin</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackTea -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackTea">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tea"/>' +
        '<rdfs:comment xml:lang="tr">Çay</rdfs:comment>' +
        '<goodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BloodPressure -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BloodPressure">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
        '<hasTurkishName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Tansiyon</hasTurkishName>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BrownBread -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BrownBread">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread"/>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">60</hasCalorie>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">65</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Kepek Ekmeği</rdfs:comment>' +
        '<goodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Dough"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BulbOnion -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BulbOnion">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Onion"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">15</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Kuru Soğan</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Butter -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Butter">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MilkProducts"/>' +
        '<rdfs:comment xml:lang="tr">Tereyağ</rdfs:comment>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrapeJam"/>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Honey"/>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#QuinceJam"/>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RoseJam"/>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#StrawberryJam"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CarrotJuice -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CarrotJuice">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FruitJuices"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">40</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Havuç Suyu</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheddarCheese -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheddarCheese">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cheese"/>' +
        '<rdfs:comment xml:lang="tr">Çedar Peyniri</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheeseSausageBagel -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheeseSausageBagel">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel"/>' +
        '<rdfs:comment xml:lang="tr">Kaşarlı Sucuklı Simit</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausage"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheeseToast -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheeseToast">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast"/>' +
        '<rdfs:comment xml:lang="tr">Kaşarlı Tost</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheesedBagel -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheesedBagel">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel"/>' +
        '<rdfs:comment xml:lang="tr">Kaşarlı Simit</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CherryTomato -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CherryTomato">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tomato"/>' +
        '<rdfs:comment xml:lang="tr">Çeri Domates</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
        '<hasTurkishName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Kolestrol</hasTurkishName>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coronary -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coronary">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
        '<hasTurkishName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Kroner</hasTurkishName>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cream -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cream">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MilkProducts"/>' +
        '<rdfs:comment xml:lang="tr">Kaymak</rdfs:comment>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Honey"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Crepe -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Crepe">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SpecialItems"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cucumber -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cucumber">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
        '<rdfs:comment xml:lang="tr">Salatalık</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#DENEME -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#DENEME">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasSurname rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Soyisim</hasSurname>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">İsim</hasName>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Active"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diseases"/>' +
        '<hasTurkishName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Diyabet</hasTurkishName>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MenuType"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Dough -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Dough">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
        '<rdfs:comment xml:lang="tr">Hamur</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#E4D3A -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#E4D3A">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">180</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">70</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Memo Nemo</hasName>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Butter"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheddarCheese"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coronary"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cream"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeshCheese"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ParmesanCheese"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#TomatoPaste"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Egg -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Egg">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#EggProducts"/>' +
        '<rdfs:comment xml:lang="tr">Yumurta</rdfs:comment>' +
        '<goodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Expresso -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Expresso">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coffee"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Extra -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Extra">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MenuType"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#F5C2A -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#F5C2A">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">172</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">77</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Mehmet Tamtürk</hasName>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AyvalikToast"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BrownBread"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheddarCheese"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CheeseSausageBagel"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Egg"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Flour"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausage"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenTea"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#HazelnutOil"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedToast"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveCheeseBagel"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OrangeJuice"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ParmesanCheese"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RoseJam"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageOmelette"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#TomatoPaste"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WaterPatty"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#F5D3A -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#F5D3A">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">162</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">52</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Kübra Eğer</hasName>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AppleJuice"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrapefruitJuice"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenTea"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Honey"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeshCheese"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ParmesanCheese"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Parsley"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pastrami"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainSavoryPastry"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PotatoSavoryPastry"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Yoghurt"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FigJam -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FigJam">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Jam"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">65</hasGlucose>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Flour -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Flour">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
        '<rdfs:comment xml:lang="tr">Un</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FriedEgg -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FriedEgg">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#EggProducts"/>' +
        '<rdfs:comment xml:lang="tr">Sahanda Yumurta</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FriedPotato -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FriedPotato">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SpecialItems"/>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FriedPotatoWithEgg -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FriedPotatoWithEgg">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SpecialItems"/>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6A0H -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6A0H">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">172</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">77</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Memo Nemo</hasName>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Memo Yemo</hasName>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackOlive"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CherryTomato"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenPepper"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ItalianPepper"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedOmelette"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveOil"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RedPepper"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageToast"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#TomatoPaste"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VegetableMenemen"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6D3D -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6D3D">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">180</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">72</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Ali Veli</hasName>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BulbOnion"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenOlive"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mint"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalTomato"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#TomatoPaste"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Yoghurt"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6F5C -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6F5C">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">150</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">90</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">qwert qwert</hasName>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Butter"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CarrotJuice"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#LindenTea"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeshCheese"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Milk"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ParmesanCheese"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#TomatoPaste"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Yoghurt"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6G6H -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#G6G6H">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">166</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">51</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mehtap tamturk</hasName>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#AyvalikToast"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackOlive"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackTea"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Butter"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#CarrotJuice"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cucumber"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Expresso"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenOlive"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenOnion"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Ham"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#HazelnutOil"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#LindenTea"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedOmelette"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveOil"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OrangeJuice"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ParmesanCheese"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pastrami"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainBagel"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainOmelette"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#QuinceJam"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RedPepper"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RoseJam"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Sausage"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageOmelette"/>' +
        '<hasDislike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageToast"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#StrawberryJam"/>' +
        '<hasLike rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WaterPatty"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Galet -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Galet">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
        '<rdfs:comment xml:lang="tr">Galeta</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausage -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausage">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts"/>' +
        '<rdfs:comment xml:lang="tr">Sucuk</rdfs:comment>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausageBagel -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausageBagel">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel"/>' +
        '<rdfs:comment xml:lang="tr">Sucuklu Simit</rdfs:comment>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackTea"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausage"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrainBread -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrainBread">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">65</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Tahıl Ekmeği</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrapeJam -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrapeJam">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Jam"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">65</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Üzüm Reçeli</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrapefruitJuice -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrapefruitJuice">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FruitJuices"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">45</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Greyfurt Suyu</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenOlive -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenOlive">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Olive"/>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">145</hasCalorie>' +
        '<rdfs:comment xml:lang="tr">Yeşil Zeytin</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenOnion -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenOnion">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Onion"/>' +
        '<rdfs:comment xml:lang="tr">Yeşil Soğan</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenPepper -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenPepper">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pepper"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">15</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Çarliston Biber</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenTea -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GreenTea">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tea"/>' +
        '<rdfs:comment xml:lang="tr">Yeşil Çay</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Ham -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Ham">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts"/>' +
        '<rdfs:comment xml:lang="tr">Jambon</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#HazelnutOil -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#HazelnutOil">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Oil"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">0</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Fındık Yağı</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Honey -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Honey">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SugarProducts"/>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">329</hasCalorie>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">60</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Bal</rdfs:comment>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Butter"/>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cream"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#I8A0J -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#I8A0J">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">187</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">84</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Michael Phelps</hasName>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Active"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BloodPressure"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ItalianPepper -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ItalianPepper">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pepper"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">15</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">SivriBiber</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#J9B1J -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#J9B1J">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">159</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">59</hasWeight>' +
        '<hasName rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Alican Zekiye</hasName>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal"/>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#J9D3J -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#J9D3J">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
        '<hasHeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">183</hasHeight>' +
        '<hasWeight rdf:datatype="http://www.w3.org/2001/XMLSchema#string">73</hasWeight>' +
        '<hasOccupation rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Active"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BloodPressure"/>' +
        '<hasDisease rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<hasMenuType rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#LindenTea -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#LindenTea">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tea"/>' +
        '<rdfs:comment xml:lang="tr">Ihlamur</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#LowFatMilk -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#LowFatMilk">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks"/>' +
        '<goodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<goodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeshCheese -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeshCheese">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cheese"/>' +
        '<rdfs:comment xml:lang="tr">Örgü Peyniri</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Milk -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Milk">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">30</hasGlucose>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mince -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mince">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts"/>' +
        '<rdfs:comment xml:lang="tr">Kıyma</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MincePatty -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MincePatty">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Patty"/>' +
        '<rdfs:comment xml:lang="tr">Kıymalı Börek</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mince"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MinceSavoryPastry -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MinceSavoryPastry">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SavoryPastry"/>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mince"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mint -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mint">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
        '<rdfs:comment xml:lang="tr">Nane</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedOmelette -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedOmelette">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette"/>' +
        '<rdfs:comment xml:lang="tr">Karışık Omlet</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedToast -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MixedToast">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast"/>' +
        '<rdfs:comment xml:lang="tr">Karışık Tost</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausage"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastBread"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MushroomOmelette -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MushroomOmelette">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette"/>' +
        '<rdfs:comment xml:lang="tr">Mantarlı Omlet</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Nescafe -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Nescafe">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coffee"/>' +
        '<goodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Normal">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MenuType"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalBread -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalBread">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">70</hasGlucose>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">90</hasCalorie>' +
        '<rdfs:comment xml:lang="tr">Ekmek</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalTomato -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalTomato">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tomato"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">30</hasGlucose>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveBagel -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveBagel">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel"/>' +
        '<rdfs:comment xml:lang="tr">Zeytinli Simit</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackOlive"/>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackTea"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveCheeseBagel -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveCheeseBagel">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel"/>' +
        '<rdfs:comment xml:lang="tr">Zeytinli Kaşarlı Simit</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackOlive"/>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackTea"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveOil -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveOil">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Oil"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">0</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Zeytinyağı</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveSavoryPastry -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveSavoryPastry">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SavoryPastry"/>' +
        '<rdfs:comment xml:lang="tr">Zeytinli Poağaça</rdfs:comment>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OrangeJuice -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OrangeJuice">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FruitJuices"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">45</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Portakal Suyu</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ParmesanCheese -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ParmesanCheese">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cheese"/>' +
        '<rdfs:comment xml:lang="tr">Parmesan Peyniri</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Parsley -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Parsley">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">5</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Maydonoz</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pastrami -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pastrami">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts"/>' +
        '<rdfs:comment xml:lang="tr">Pastırma</rdfs:comment>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PastramiMenemen -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PastramiMenemen">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Menemen"/>' +
        '<rdfs:comment xml:lang="tr">Pastırmalı Menemen</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainBagel -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainBagel">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel"/>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">240</hasCalorie>' +
        '<rdfs:comment xml:lang="tr">Sade Simit</rdfs:comment>' +
        '<hasSuitablePair rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BlackTea"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainMenemen -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainMenemen">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Menemen"/>' +
        '<rdfs:comment xml:lang="tr">Menemen</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BulbOnion"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Egg"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ItalianPepper"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Mint"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalTomato"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OliveOil"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainOmelette -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainOmelette">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette"/>' +
        '<rdfs:comment xml:lang="tr">Omlet</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainSavoryPastry -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PlainSavoryPastry">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SavoryPastry"/>' +
        '<rdfs:comment xml:lang="tr">Sade Poğaça</rdfs:comment>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PotatoPatty -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PotatoPatty">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Patty"/>' +
        '<rdfs:comment xml:lang="tr">Patatesli Börek</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PotatoSavoryPastry -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PotatoSavoryPastry">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SavoryPastry"/>' +
        '<rdfs:comment xml:lang="tr">Patetesli Poğaça</rdfs:comment>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#QuinceJam -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#QuinceJam">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Jam"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">65</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Ayva Reçeli</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RedPepper -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RedPepper">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pepper"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">15</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Kırmızı Biber</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RoseJam -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RoseJam">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Jam"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">65</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Gül Reçeli</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RyeBread -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RyeBread">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">45</hasGlucose>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">55</hasCalorie>' +
        '<rdfs:comment xml:lang="tr">Çavdar Ekmeği</rdfs:comment>' +
        '<goodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Sausage -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Sausage">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts"/>' +
        '<rdfs:comment xml:lang="tr">Sosis</rdfs:comment>' +
        '<notGoodWith rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageOmelette -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageOmelette">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette"/>' +
        '<rdfs:comment xml:lang="tr">Sosisli Omlet</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageToast -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SausageToast">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast"/>' +
        '<rdfs:comment xml:lang="tr">Sosisli Tost</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GarlicSausage"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastBread"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Stable">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OccupationTypes"/>' +
        '<hasMaxCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">500</hasMaxCalorie>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#StrawberryJam -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#StrawberryJam">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Jam"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">65</hasGlucose>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SunflowerOil -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SunflowerOil">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Oil"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">0</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Ayçiçek Yağı</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastBread -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastBread">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread"/>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">297</hasCalorie>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">85</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Tost Ekmeği</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastedBread -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastedBread">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">70</hasGlucose>' +
        '<hasCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">90</hasCalorie>' +
        '<rdfs:comment xml:lang="tr">Kızarmış Ekmek</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#TomatoPaste -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#TomatoPaste">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Sauces"/>' +
        '<rdfs:comment xml:lang="tr">Salça</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VegetableMenemen -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VegetableMenemen">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Menemen"/>' +
        '<rdfs:comment xml:lang="tr">Sebzeli Menemen</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VegetableOmelette -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VegetableOmelette">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Omelette"/>' +
        '<rdfs:comment xml:lang="tr">Sebzeli Omlet</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VeryActive -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#VeryActive">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#OccupationTypes"/>' +
        '<hasMaxCalorie rdf:datatype="http://www.w3.org/2001/XMLSchema#int">1200</hasMaxCalorie>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WaterPatty -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WaterPatty">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Patty"/>' +
        '<rdfs:comment xml:lang="tr">Su Böreği</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cheese"/>' +
        '<rdfs:comment xml:lang="tr">Beyaz Peynir</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheeseToast -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheeseToast">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast"/>' +
        '<rdfs:comment xml:lang="tr">Beyaz Peynirli Tost</rdfs:comment>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastBread"/>' +
        '<hasIngredient rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WhiteCheese"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#YellowCheese">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cheese"/>' +
        '<rdfs:comment xml:lang="tr">Kaşar</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Yoghurt -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Yoghurt">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MilkProducts"/>' +
        '<hasGlucose rdf:datatype="http://www.w3.org/2001/XMLSchema#int">35</hasGlucose>' +
        '<rdfs:comment xml:lang="tr">Yoğurt</rdfs:comment>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// General axioms' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '<rdf:Description>' +
        '<rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AllDisjointClasses"/>' +
        '<owl:members rdf:parseType="Collection">' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BakeryProducts"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Drinks"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#EggProducts"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MeatProducts"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MilkProducts"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Oil"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Salads"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Sauces"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SugarProducts"/>' +
        '</owl:members>' +
    '</rdf:Description>' +
    '<rdf:Description>' +
        '<rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AllDisjointClasses"/>' +
        '<owl:members rdf:parseType="Collection">' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Coffee"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#FruitJuices"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tea"/>' +
        '</owl:members>' +
    '</rdf:Description>' +
    '<rdf:Description>' +
        '<rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AllDifferent"/>' +
        '<owl:distinctMembers rdf:parseType="Collection">' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#MincePatty"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#PotatoPatty"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#WaterPatty"/>' +
        '</owl:distinctMembers>' +
    '</rdf:Description>' +
    '<rdf:Description>' +
        '<rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AllDisjointClasses"/>' +
        '<owl:members rdf:parseType="Collection">' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bagel"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Bread"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Galet"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Patty"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#SavoryPastry"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Toast"/>' +
        '</owl:members>' +
    '</rdf:Description>' +
    '<rdf:Description>' +
        '<rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AllDisjointClasses"/>' +
        '<owl:members rdf:parseType="Collection">' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Olive"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Onion"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Pepper"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Tomato"/>' +
        '</owl:members>' +
    '</rdf:Description>' +
    '<rdf:Description>' +
        '<rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AllDifferent"/>' +
        '<owl:distinctMembers rdf:parseType="Collection">' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#BrownBread"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#GrainBread"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#NormalBread"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#RyeBread"/>' +
            '<rdf:Description rdf:about="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#ToastBread"/>' +
        '</owl:distinctMembers>' +
    '</rdf:Description>' +
    '' +
'' +
'' +
    '<!-- ' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
    '//' +
    '// Rules' +
    '//' +
    '///////////////////////////////////////////////////////////////////////////////////////' +
     '-->' +
'' +
    '<swrl:Variable rdf:about="urn:swrl#b"/>' +
    '<swrl:Variable rdf:about="urn:swrl#u"/>' +
    '<swrl:Variable rdf:about="urn:swrl#g"/>' +
    '<swrl:Variable rdf:about="urn:swrl#l"/>' +
    '<swrl:Variable rdf:about="urn:swrl#p"/>' +
    '<swrl:Variable rdf:about="urn:swrl#cal"/>' +
    '<swrl:Imp>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canNotEat"/>' +
                        '<swrl:argument2 rdf:resource="urn:swrl#b"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:rest>' +
                            '<swrl:AtomList>' +
                                '<rdf:rest>' +
                                    '<swrl:AtomList>' +
                                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                        '<rdf:first>' +
                                            '<swrl:IndividualPropertyAtom>' +
                                                '<swrl:argument2 rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
                                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#notGoodWith"/>' +
                                                '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                                            '</swrl:IndividualPropertyAtom>' +
                                        '</rdf:first>' +
                                    '</swrl:AtomList>' +
                                '</rdf:rest>' +
                                '<rdf:first>' +
                                    '<swrl:IndividualPropertyAtom>' +
                                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
                                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasDisease"/>' +
                                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                                    '</swrl:IndividualPropertyAtom>' +
                                '</rdf:first>' +
                            '</swrl:AtomList>' +
                        '</rdf:rest>' +
                        '<rdf:first>' +
                            '<swrl:ClassAtom>' +
                                '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                            '</swrl:ClassAtom>' +
                        '</rdf:first>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canNotEat"/>' +
                        '<swrl:argument2 rdf:resource="urn:swrl#b"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:first>' +
                            '<swrl:ClassAtom>' +
                                '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                            '</swrl:ClassAtom>' +
                        '</rdf:first>' +
                        '<rdf:rest>' +
                            '<swrl:AtomList>' +
                                '<rdf:rest>' +
                                    '<swrl:AtomList>' +
                                        '<rdf:rest>' +
                                            '<swrl:AtomList>' +
                                                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                                '<rdf:first>' +
                                                    '<swrl:BuiltinAtom>' +
                                                        '<swrl:builtin rdf:resource="http://www.w3.org/2003/11/swrlb#greaterThanOrEqual"/>' +
                                                        '<swrl:arguments>' +
                                                            '<rdf:Description>' +
                                                                '<rdf:type rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#List"/>' +
                                                                '<rdf:first rdf:resource="urn:swrl#cal"/>' +
                                                                '<rdf:rest>' +
                                                                    '<rdf:Description>' +
                                                                        '<rdf:type rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#List"/>' +
                                                                        '<rdf:first rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">200</rdf:first>' +
                                                                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                                                    '</rdf:Description>' +
                                                                '</rdf:rest>' +
                                                            '</rdf:Description>' +
                                                        '</swrl:arguments>' +
                                                    '</swrl:BuiltinAtom>' +
                                                '</rdf:first>' +
                                            '</swrl:AtomList>' +
                                        '</rdf:rest>' +
                                        '<rdf:first>' +
                                            '<swrl:DatavaluedPropertyAtom>' +
                                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasCalorie"/>' +
                                                '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                                                '<swrl:argument2 rdf:resource="urn:swrl#cal"/>' +
                                            '</swrl:DatavaluedPropertyAtom>' +
                                        '</rdf:first>' +
                                    '</swrl:AtomList>' +
                                '</rdf:rest>' +
                                '<rdf:first>' +
                                    '<swrl:IndividualPropertyAtom>' +
                                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diet"/>' +
                                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasMenuType"/>' +
                                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                                    '</swrl:IndividualPropertyAtom>' +
                                '</rdf:first>' +
                            '</swrl:AtomList>' +
                        '</rdf:rest>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canEat"/>' +
                        '<swrl:argument2 rdf:resource="urn:swrl#p"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:first>' +
                            '<swrl:IndividualPropertyAtom>' +
                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasLike"/>' +
                                '<swrl:argument2 rdf:resource="urn:swrl#l"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                            '</swrl:IndividualPropertyAtom>' +
                        '</rdf:first>' +
                        '<rdf:rest>' +
                            '<swrl:AtomList>' +
                                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                '<rdf:first>' +
                                    '<swrl:IndividualPropertyAtom>' +
                                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasSuitablePair"/>' +
                                        '<swrl:argument1 rdf:resource="urn:swrl#l"/>' +
                                        '<swrl:argument2 rdf:resource="urn:swrl#p"/>' +
                                    '</swrl:IndividualPropertyAtom>' +
                                '</rdf:first>' +
                            '</swrl:AtomList>' +
                        '</rdf:rest>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:rest>' +
                            '<swrl:AtomList>' +
                                '<rdf:first>' +
                                    '<swrl:IndividualPropertyAtom>' +
                                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Diabetes"/>' +
                                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasDisease"/>' +
                                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                                    '</swrl:IndividualPropertyAtom>' +
                                '</rdf:first>' +
                                '<rdf:rest>' +
                                    '<swrl:AtomList>' +
                                        '<rdf:rest>' +
                                            '<swrl:AtomList>' +
                                                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                                '<rdf:first>' +
                                                    '<swrl:BuiltinAtom>' +
                                                        '<swrl:builtin rdf:resource="http://www.w3.org/2003/11/swrlb#greaterThanOrEqual"/>' +
                                                        '<swrl:arguments>' +
                                                            '<rdf:Description>' +
                                                                '<rdf:type rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#List"/>' +
                                                                '<rdf:first rdf:resource="urn:swrl#g"/>' +
                                                                '<rdf:rest>' +
                                                                    '<rdf:Description>' +
                                                                        '<rdf:type rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#List"/>' +
                                                                        '<rdf:first rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">50</rdf:first>' +
                                                                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                                                    '</rdf:Description>' +
                                                                '</rdf:rest>' +
                                                            '</rdf:Description>' +
                                                        '</swrl:arguments>' +
                                                    '</swrl:BuiltinAtom>' +
                                                '</rdf:first>' +
                                            '</swrl:AtomList>' +
                                        '</rdf:rest>' +
                                        '<rdf:first>' +
                                            '<swrl:DatavaluedPropertyAtom>' +
                                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasGlucose"/>' +
                                                '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                                                '<swrl:argument2 rdf:resource="urn:swrl#g"/>' +
                                            '</swrl:DatavaluedPropertyAtom>' +
                                        '</rdf:first>' +
                                    '</swrl:AtomList>' +
                                '</rdf:rest>' +
                            '</swrl:AtomList>' +
                        '</rdf:rest>' +
                        '<rdf:first>' +
                            '<swrl:ClassAtom>' +
                                '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                            '</swrl:ClassAtom>' +
                        '</rdf:first>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canNotEat"/>' +
                        '<swrl:argument2 rdf:resource="urn:swrl#b"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#canEat"/>' +
                        '<swrl:argument2 rdf:resource="urn:swrl#b"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:first>' +
                            '<swrl:ClassAtom>' +
                                '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#User"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                            '</swrl:ClassAtom>' +
                        '</rdf:first>' +
                        '<rdf:rest>' +
                            '<swrl:AtomList>' +
                                '<rdf:first>' +
                                    '<swrl:IndividualPropertyAtom>' +
                                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
                                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#goodWith"/>' +
                                        '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                                    '</swrl:IndividualPropertyAtom>' +
                                '</rdf:first>' +
                                '<rdf:rest>' +
                                    '<swrl:AtomList>' +
                                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                        '<rdf:first>' +
                                            '<swrl:IndividualPropertyAtom>' +
                                                '<swrl:argument2 rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Cholesterol"/>' +
                                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#hasDisease"/>' +
                                                '<swrl:argument1 rdf:resource="urn:swrl#u"/>' +
                                            '</swrl:IndividualPropertyAtom>' +
                                        '</rdf:first>' +
                                    '</swrl:AtomList>' +
                                '</rdf:rest>' +
                            '</swrl:AtomList>' +
                        '</rdf:rest>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/mehmet/ontologies/2012/11/untitled-ontology-31#Breakfast"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#b"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
    '</swrl:Imp>' +
'</rdf:RDF>';
