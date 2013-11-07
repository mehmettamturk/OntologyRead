var owlXml = '<?xml version="1.0"?>' +
'<rdf:RDF xmlns="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#"' +
     'xml:base="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29"' +
     'xmlns:A="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#A/"' +
     'xmlns:Verb="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb+"' +
     'xmlns:Is="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Am/Is/"' +
     'xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"' +
     'xmlns:swrl="http://www.w3.org/2003/11/swrl#"' +
     'xmlns:Was="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Was/"' +
     'xmlns:swrlb="http://www.w3.org/2003/11/swrlb#"' +
     'xmlns:owl="http://www.w3.org/2002/07/owl#"' +
     'xmlns:xsd="http://www.w3.org/2001/XMLSchema#"' +
     'xmlns:Has="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Has/"' +
     'xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' +
     'xmlns:Have="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Have/">' +
    '<owl:Ontology rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29">' +
        '<rdfs:comment rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Kişiyi Yönelik İngilizce Çalışma Programı</rdfs:comment>' +
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
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasAuxiliaryVerb -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasAuxiliaryVerb">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasKnowledge -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasKnowledge">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasLevel -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasLevel">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Level"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasRelation -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasRelation">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentLevel -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentLevel">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Level"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentMaterial -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentMaterial">' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
    '</owl:ObjectProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasVerb -->' +
'' +
    '<owl:ObjectProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasVerb">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<rdfs:range rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs"/>' +
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
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasDescription -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasDescription">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasName -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasName">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNegative -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNegative">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
    '</owl:DatatypeProperty>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasUrl -->' +
'' +
    '<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasUrl">' +
        '<rdfs:domain rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
        '<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>' +
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
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ActiveAndPassive -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ActiveAndPassive">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adjectives -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adjectives">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adverbs -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adverbs">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Articles -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Articles">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Determiners"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Causatives -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Causatives">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Clauses -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Clauses">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Determiners -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Determiners">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Example -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Example">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Exercise -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Exercise">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Game -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Game">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Gerunds -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Gerunds">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IfClause -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IfClause">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Clauses"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Infinitives -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Infinitives">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Level -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Level"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ModalVerbs -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ModalVerbs">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Modals -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Modals">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#NounClause -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#NounClause">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Clauses"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Participles -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Participles">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Prepositions -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Prepositions">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#RelativeClause -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#RelativeClause">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Clauses"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReportedSpeech -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReportedSpeech">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Story -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Story">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs -->' +
'' +
    '<owl:Class rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs">' +
        '<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
    '</owl:Class>' +
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
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#A/An -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#A/An">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Articles"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Active -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Active">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ActiveAndPassive"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Advanced -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Advanced">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Level"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AdvancedMaterials -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AdvancedMaterials">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
        '<hasUrl rdf:datatype="http://www.w3.org/2001/XMLSchema#string">/data/materials/stories/advanced/</hasUrl>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adverbs -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adverbs">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adverbs"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Am/Is/Are -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Am/Is/Are">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">AmNot/Isn&#39;t/Aren&#39;t</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AttributiveAdjectives -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AttributiveAdjectives">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adjectives"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#BeAbleTo -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#BeAbleTo">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">NotBeAbleTo</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Can -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Can">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Can&#39;t</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Comperatives -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Comperatives">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adjectives"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Could -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Could">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Couldn&#39;t</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#DemonstrativePronouns -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#DemonstrativePronouns">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Level"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ElementaryMaterials -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ElementaryMaterials">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
        '<hasUrl rdf:datatype="http://www.w3.org/2001/XMLSchema#string">/data/materials/stories/elementary/</hasUrl>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FutureContinuousTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FutureContinuousTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GoingTo"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WillBe"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FutureInThePast -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FutureInThePast">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GoingTo"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Was/Were"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FuturePerfectContinuousTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FuturePerfectContinuousTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Shall"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb+ing"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Will"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FuturePerfectTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FuturePerfectTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb3"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WillHave"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Generalization -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Generalization">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Articles"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GenericPronouns -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GenericPronouns">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Gerunds -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Gerunds">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Gerunds"/>' +
        '<hasRelation rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Infinitives"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasRelation rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Participles"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GetSthDone -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GetSthDone">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Causatives"/>' +
        '<hasDescription rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Get + Something + Verb3</hasDescription>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GoingTo -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GoingTo">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Had -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Had">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#HadBeen -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#HadBeen">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Hadn&#39;tBeen</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Has/HaveBeen -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Has/HaveBeen">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Hasn&#39;t/Haven&#39;tBeen' +
'' +
'</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Have/Has -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Have/Has">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Haven&#39;t/Hasn&#39;t</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#HaveSthDone -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#HaveSthDone">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Causatives"/>' +
        '<hasDescription rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Have + Something + Verb3</hasDescription>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#If -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#If">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IfClause"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ImparativeRS -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ImparativeRS">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReportedSpeech"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Imperatives -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Imperatives">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IndefinitePronouns -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IndefinitePronouns">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Infinitives -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Infinitives">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Infinitives"/>' +
        '<hasRelation rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Gerunds"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasRelation rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Participles"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Level"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IntermediateMaterials -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IntermediateMaterials">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Material"/>' +
        '<hasUrl rdf:datatype="http://www.w3.org/2001/XMLSchema#string">/data/materials/stories/intermediate/</hasUrl>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#MakeSthDone -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#MakeSthDone">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Causatives"/>' +
        '<hasDescription rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Make + Something + Verb3</hasDescription>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#MovementPrepositions -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#MovementPrepositions">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Prepositions"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#NoArticle -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#NoArticle">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Articles"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Participles -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Participles">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Participles"/>' +
        '<hasRelation rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Gerunds"/>' +
        '<hasRelation rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Infinitives"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Passive -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Passive">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ActiveAndPassive"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastContinuousTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastContinuousTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
        '<hasKnowledge rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePastTense"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb+ing"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Was/Were"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastPerfectContinuousTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastPerfectContinuousTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#HadBeen"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb+ing"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastPerfectTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastPerfectTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Advanced"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Had"/>' +
        '<hasKnowledge rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePastTense"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb3"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PersonalPronouns -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PersonalPronouns">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PlacePrepositions -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PlacePrepositions">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Prepositions"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PossesivePronouns -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PossesivePronouns">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PredicativeAdjectives -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PredicativeAdjectives">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adjectives"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PresentContinuousTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PresentContinuousTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Am/Is/Are"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PresentPerfectContinuousTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PresentPerfectContinuousTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Has/HaveBeen"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb+ing"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PresentPerfectTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PresentPerfectTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Have/Has"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb3"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Quantifiers -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Quantifiers">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Determiners"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReflexivePronouns -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReflexivePronouns">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Pronouns"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#RelativeClause -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#RelativeClause">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#RelativeClause"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#S001 -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#S001">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
        '<hasNeedWork rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#FutureInThePast"/>' +
        '<hasNeedWork rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Imperatives"/>' +
        '<hasStudentLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
        '<hasNeedWork rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastContinuousTense"/>' +
        '<hasNeedWork rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PredicativeAdjectives"/>' +
        '<hasNeedWork rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePresentTense"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#S386 -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#S386">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Shall -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Shall">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Shall not</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimpleFutureTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimpleFutureTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#GoingTo"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
        '<hasAuxiliaryVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Will"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePastTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePastTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb2"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePresentTense -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePresentTense">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Tenses"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
        '<hasVerb rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#StatementRS -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#StatementRS">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReportedSpeech"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Superlatives -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Superlatives">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Adjectives"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#The -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#The">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Articles"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#TimePrepositions -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#TimePrepositions">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Prepositions"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Unless -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Unless">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IfClause"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb+ing -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb+ing">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1 -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb1">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb2 -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb2">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb3 -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verb3">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Verbs"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WHQuestionsRS -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WHQuestionsRS">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReportedSpeech"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Was/Were -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Was/Were">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Wasn&#39;t/Weren&#39;t</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Will -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Will">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Won&#39;t</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WillBe -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WillBe">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Won&#39;tBe' +
'</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WillHave -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#WillHave">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AuxiliaryVerbs"/>' +
        '<hasNegative rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Won&#39;tHave</hasNegative>' +
    '</owl:NamedIndividual>' +
    '' +
'' +
'' +
    '<!-- http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#YesNoQuestionsRS -->' +
'' +
    '<owl:NamedIndividual rdf:about="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#YesNoQuestionsRS">' +
        '<rdf:type rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ReportedSpeech"/>' +
        '<hasLevel rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
    '</owl:NamedIndividual>' +
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
    '<swrl:Variable rdf:about="urn:swrl#g"/>' +
    '<swrl:Variable rdf:about="urn:swrl#s"/>' +
    '<swrl:Variable rdf:about="urn:swrl#k"/>' +
    '<swrl:Variable rdf:about="urn:swrl#w"/>' +
    '<swrl:Variable rdf:about="urn:swrl#r"/>' +
    '<swrl:Imp>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#AdvancedMaterials"/>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentMaterial"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                        '<rdf:first>' +
                            '<swrl:IndividualPropertyAtom>' +
                                '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Advanced"/>' +
                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentLevel"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                            '</swrl:IndividualPropertyAtom>' +
                        '</rdf:first>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
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
                                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasRelation"/>' +
                                                '<swrl:argument1 rdf:resource="urn:swrl#g"/>' +
                                                '<swrl:argument2 rdf:resource="urn:swrl#r"/>' +
                                            '</swrl:IndividualPropertyAtom>' +
                                        '</rdf:first>' +
                                    '</swrl:AtomList>' +
                                '</rdf:rest>' +
                                '<rdf:first>' +
                                    '<swrl:IndividualPropertyAtom>' +
                                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork"/>' +
                                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                                        '<swrl:argument2 rdf:resource="urn:swrl#w"/>' +
                                    '</swrl:IndividualPropertyAtom>' +
                                '</rdf:first>' +
                            '</swrl:AtomList>' +
                        '</rdf:rest>' +
                        '<rdf:first>' +
                            '<swrl:ClassAtom>' +
                                '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                            '</swrl:ClassAtom>' +
                        '</rdf:first>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#g"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork"/>' +
                        '<swrl:argument2 rdf:resource="urn:swrl#r"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                        '<rdf:first>' +
                            '<swrl:IndividualPropertyAtom>' +
                                '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Elementary"/>' +
                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentLevel"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                            '</swrl:IndividualPropertyAtom>' +
                        '</rdf:first>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#ElementaryMaterials"/>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentMaterial"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                        '<rdf:first>' +
                            '<swrl:IndividualPropertyAtom>' +
                                '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#PastContinuousTense"/>' +
                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                            '</swrl:IndividualPropertyAtom>' +
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
                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#SimplePastTense"/>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
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
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                        '<swrl:argument2 rdf:resource="urn:swrl#w"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Grammer"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#g"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:first>' +
                            '<swrl:ClassAtom>' +
                                '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                            '</swrl:ClassAtom>' +
                        '</rdf:first>' +
                        '<rdf:rest>' +
                            '<swrl:AtomList>' +
                                '<rdf:first>' +
                                    '<swrl:IndividualPropertyAtom>' +
                                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasKnowledge"/>' +
                                        '<swrl:argument1 rdf:resource="urn:swrl#g"/>' +
                                        '<swrl:argument2 rdf:resource="urn:swrl#k"/>' +
                                    '</swrl:IndividualPropertyAtom>' +
                                '</rdf:first>' +
                                '<rdf:rest>' +
                                    '<swrl:AtomList>' +
                                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                                        '<rdf:first>' +
                                            '<swrl:IndividualPropertyAtom>' +
                                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasNeedWork"/>' +
                                                '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                                                '<swrl:argument2 rdf:resource="urn:swrl#w"/>' +
                                            '</swrl:IndividualPropertyAtom>' +
                                        '</rdf:first>' +
                                    '</swrl:AtomList>' +
                                '</rdf:rest>' +
                            '</swrl:AtomList>' +
                        '</rdf:rest>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
    '</swrl:Imp>' +
    '<swrl:Imp>' +
        '<swrl:head>' +
            '<swrl:AtomList>' +
                '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                '<rdf:first>' +
                    '<swrl:IndividualPropertyAtom>' +
                        '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#IntermediateMaterials"/>' +
                        '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentMaterial"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:IndividualPropertyAtom>' +
                '</rdf:first>' +
            '</swrl:AtomList>' +
        '</swrl:head>' +
        '<swrl:body>' +
            '<swrl:AtomList>' +
                '<rdf:first>' +
                    '<swrl:ClassAtom>' +
                        '<swrl:classPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Student"/>' +
                        '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                    '</swrl:ClassAtom>' +
                '</rdf:first>' +
                '<rdf:rest>' +
                    '<swrl:AtomList>' +
                        '<rdf:rest rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"/>' +
                        '<rdf:first>' +
                            '<swrl:IndividualPropertyAtom>' +
                                '<swrl:argument2 rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#Intermediate"/>' +
                                '<swrl:propertyPredicate rdf:resource="http://www.semanticweb.org/kubra/ontologies/2012/11/untitled-ontology-29#hasStudentLevel"/>' +
                                '<swrl:argument1 rdf:resource="urn:swrl#s"/>' +
                            '</swrl:IndividualPropertyAtom>' +
                        '</rdf:first>' +
                    '</swrl:AtomList>' +
                '</rdf:rest>' +
            '</swrl:AtomList>' +
        '</swrl:body>' +
    '</swrl:Imp>' +
'</rdf:RDF>';