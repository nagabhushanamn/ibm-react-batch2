class DataSource {

    static getComments() {
        let comments = [{
                id: 1,
                author: 'Nagabhushanam',
                body: 'react awesome'
            },
            {
                id: 2,
                author: 'Ria N',
                body: 'this is good UI lib'
            }
        ];
        return comments;
    }


    static getTopics() {
        return ['React', 'Redux', 'Jest', "JavaScript", 'Java'];
    }

    static addChangeListener(listener) {
        // 
    }
    static removeChangeLister(listener) {
        //
    }

}

export default DataSource;