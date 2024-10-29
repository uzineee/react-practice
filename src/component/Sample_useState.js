import React, { useState } from 'react';
function Sample_useState() {
    // 하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에
    // 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const upClick = () => {
        setCount(count + 1);
    }

    const downClick = () => {
        setCount(count - 1);
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={upClick}> + 1</button>
                <button onClick={downClick}> - 1</button>
            </div>
            <div>
                <div>
                    <input value={name} onChange={onChangeName}/>
                </div>
                <div>>
                    <b>이름:</b> {name}
                </div>
            </div>
        </div>
    );

}

export default Sample_useState;