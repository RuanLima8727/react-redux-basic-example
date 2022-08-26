import React from 'react';
import { connect } from 'react-redux';
import { toggleLesson } from '../../store/actions/course';

const Sidebar  = ({modules, dispatch}) =>{
    
    console.log('modules',modules)
        return (
            <div>
                <aside>
                {modules.map(module=>(
                    <div key={module.id}>
                        <strong>{module.description}</strong>
                        <ul>
                            {module.lessons.map((lesson)=>(
                                <>
                                    <li>
                                        {lesson.title}
                                        <button onClick={()=>dispatch(toggleLesson(module,lesson))}>
                                            Selecionar
                                        </button>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                ))}
                </aside>
            </div>
        )
    }

 export default connect(((state)=>({modules: state.course.modules})))(Sidebar)