import React, {useState, useEffect } from'react';

function Sample_useEffect() {
// 하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에
    // 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용
    const [name, setName] = useState('');
    const [hobby, setHobby] = useState('');
    const [visible, setVisible] = useState(false);

    // 2.
/*    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            hobby
        });
    });*/

    // 2-1
    /* useEffect(() => {
        console.log('마운트 될 때만 실행됩니다.');
    }, [])*/

    // 2-2
   /* useEffect(() => {
        console.log(name);
    }, [name]);*/

    // 2-3
   /* useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('Cleanup');
            console.log(name);
        };
    });*/

    // 2-4
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, []);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeHobby = (e) => {
        setHobby(e.target.value);
    }

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? '숨기기' : '보이기'}
                </button>
                <hr />
            </div>
            {visible && (
                <div>
                    <div>
                        이름을 입력하세요. -> <input value={name} onChange={onChangeName} />
                    </div>
                    <div>
                        취미를 입력하세요. -> <input value={hobby} onChange={onChangeHobby} />
                    </div>
                    <div>
                        <b>이름:</b> {name}
                    </div>
                    <div>
                        <b>취미:</b> {hobby}
                    </div>
                </div>
            )}
        </div>
    );

}

export default Sample_useEffect;