import * as React from 'react';
import "./SideForm.scss";
import Heading from './Heading';
import Card from './Card';

interface IProps {
    onSubmit: () => void;

    onCancel: () => void;
    isUpdate: boolean;
    heading?: string;
    validation: { valid: boolean, errors: { name: string, error: string }[] };
}

class SideForm extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div className={`component-sideForm`}>
                <Heading>
                    {this.props.heading ? this.props.heading : (this.props.isUpdate ? "Alterar" : "Novo")}
                </Heading>

                <Card className="form-card" light={true}>
                    <form onSubmit={(e) => { this.submit(e); }} autoComplete="off">
                        {this.props.validation.errors && this.props.validation.errors.filter(x => x.name === "default").length > 0 ?
                            <div className="has-text-danger has-text-centered">
                                {
                                    this.props.validation.errors
                                        .filter(x => x.name === "default")
                                        .map((x, i) => <p key={i}>{x.error}</p>)
                                }
                            </div> : null}
                        {this.props.children}
                        {this.getButtonLayout()}
                    </form>
                </Card>
            </div>
        );
    }

    public getButtonLayout(): React.ReactNode {
        if (!this.props.isUpdate) {
            return (
                <button className="submit-btn button is-fullwidth" type="submit" disabled={!this.props.validation.valid}>Confirmar</button>
            );
        } else {
            return (
                <div className="level submit-btn">
                    <div className="level-left">
                        <button className="button is-danger" type="button" onClick={() => { this.cancelUpdate() }}>Cancelar</button>
                    </div>
                    <div className="level-right">
                        <button className="button" type="submit" disabled={!this.props.validation.valid}>Confirmar</button>
                    </div>
                </div>
            );
        }
    }
    public cancelUpdate(): void {
        this.props.onCancel();
    }

    private submit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.props.onSubmit();
    }
}

export default SideForm;
