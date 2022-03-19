import React from 'react';
import './Employe.css';

const Employe = (props) => {
    const employes = props.employes;
    return (
        <div>
            <h4 className="employeeStatus">Employee Added: {props.employes.length}</h4>
            {
                employes.map((employe) => {
                    return (
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div>
                                        <img className="employeImg" src={employe.img} alt='employee' width="100%"></img>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{employe.name}</h5>
                                        <p className="card-text"><small className="text-muted">Salary: ${employe.salary}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Employe;